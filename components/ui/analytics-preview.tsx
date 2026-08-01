"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { analyticsPreviewData } from "@/app/components/site-data";

type CountUpNumberProps = {
  value: string;
  delay?: number;
  suffix?: string;
};

function CountUpNumber({ value, delay = 0, suffix = "" }: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const decimalPlaces = value.includes(",")
    ? (value.split(",")[1]?.length ?? 0)
    : 0;
  const target = Number(value.replace(",", "."));

  useEffect(() => {
    const element = ref.current;
    if (!element || !Number.isFinite(target)) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      const animationFrame = window.requestAnimationFrame(() => {
        setDisplayValue(value);
      });

      return () => window.cancelAnimationFrame(animationFrame);
    }

    let animationFrame = 0;
    let hasAnimated = false;

    const startAnimation = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      const duration = 1200;
      let startTime: number | undefined;

      const update = (time: number) => {
        if (startTime === undefined) startTime = time;

        const elapsed = Math.max(0, time - startTime - delay);
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = target * easedProgress;
        const formattedValue = currentValue
          .toFixed(decimalPlaces)
          .replace(".", ",");

        setDisplayValue(formattedValue);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(update);
        } else {
          setDisplayValue(value);
        }
      };

      animationFrame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        startAnimation();
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [decimalPlaces, delay, target, value]);

  if (!Number.isFinite(target)) {
    return <span className="tabular-nums">{value}{suffix}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export function AnalyticsPreview() {
  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const windowFrame = event.currentTarget;
    const desktopMotion = window.matchMedia(
      "(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;

    if (!desktopMotion) {
      windowFrame.style.transform = "";
      return;
    }

    const bounds = windowFrame.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    const rotateX = (-y * 3.5).toFixed(2);
    const rotateY = (x * 3.5).toFixed(2);

    windowFrame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-1px)`;
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "";
  };

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-[22px] bg-radial
       from-primary/5 to-transparent border border-black/5 p-3
        shadow-[0_24px_80px_rgb(16_23_34/10%)] transition-transform duration-300 ease-out md:will-change-transform sm:p-5"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <div className="relative isolate flex min-h-0 flex-1 flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          {analyticsPreviewData.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border-subtle bg-white/80 p-5 shadow-[0_10px_34px_rgb(16_23_34/4%)]"
            >
              <p className="text-xs font-semibold text-text-secondary sm:text-sm">
                {metric.label}
              </p>
              <div className="flex items-end gap-2">
                <p className="mt-2 font-semibold tracking-tight text-text-primary sm:text-2xl">
                  <CountUpNumber value={metric.value} />
                </p>
                <p className="mb-1 text-xs font-semibold text-emerald-500 sm:text-sm">
                  &uarr;{" "}
                  <CountUpNumber
                    value={metric.increase.replace("%", "")}
                    suffix="%"
                    delay={120}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex min-h-0 w-full flex-1 flex-col rounded-2xl border border-border-subtle bg-white/80 p-4 shadow-[0_12px_38px_rgb(16_23_34/5%)]"
          aria-label={analyticsPreviewData.chartLabel}
        >
          <div className="mb-3 flex shrink-0 items-center justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-text-primary sm:text-lg">
              Clientes mensuales
            </h3>
          </div>

          <div className="min-h-[180px] flex-1 px-1 pb-1 pt-2">
            <ResponsiveContainer
              width="100%"
              height="100%"
              minWidth={0}
              minHeight={180}
              initialDimension={{ width: 620, height: 310 }}
            >
              <AreaChart
                accessibilityLayer
                data={analyticsPreviewData.chartData}
                margin={{ top: 10, right: 18, bottom: 8, left: 8 }}
              >
                <defs>
                  <linearGradient id="clientes-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop stopColor="var(--color-primary)" stopOpacity={0.2} />
                    <stop offset="1" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  vertical={false}
                  stroke="var(--color-border-subtle)"
                  strokeDasharray="0"
                />
                <XAxis
                  axisLine={false}
                  dataKey="day"
                  interval={3}
                  padding={{ left: 8, right: 8 }}
                  tick={{ fill: "var(--color-text-tertiary)", fontSize: 12, fontWeight: 600 }}
                  tickMargin={10}
                  tickLine={false}
                />
                <YAxis
                  axisLine={false}
                  domain={[0, 428]}
                  tick={{ fill: "var(--color-text-tertiary)", fontSize: 12, fontWeight: 600 }}
                  tickCount={4}
                  tickFormatter={(value) => `${value}`}
                  tickMargin={8}
                  tickLine={false}
                  width={38}
                />
                <Tooltip
                  cursor={{ stroke: "var(--color-border)", strokeDasharray: "4 4" }}
                  contentStyle={{
                    backgroundColor: "var(--color-white)",
                    border: "1px solid var(--color-border-subtle)",
                    borderRadius: 10,
                    boxShadow: "0 16px 42px rgb(16 23 34 / 12%)",
                    padding: "10px 14px",
                  }}
                  itemStyle={{ color: "var(--color-text-primary)", fontSize: 13 }}
                  labelStyle={{
                    color: "var(--color-text-secondary)",
                    fontSize: 12,
                    marginBottom: 4,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="clientes"
                  name="Clientes"
                  stroke="var(--color-primary)"
                  strokeWidth={3}
                  fill="url(#clientes-fill)"
                  activeDot={{ r: 6, fill: "var(--color-primary)", strokeWidth: 3 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
