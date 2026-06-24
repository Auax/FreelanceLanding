"use client";

import { Check, ChevronDown } from "lucide-react";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
  type Country,
  type Value,
} from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import PhoneNumberInput from "react-phone-number-input/input";
import labels from "react-phone-number-input/locale/es.json";

type CountryOption = {
  code: Country;
  name: string;
  dialCode: string;
};

const spanishCollator = new Intl.Collator("es", { sensitivity: "base" });
const countries: CountryOption[] = getCountries()
  .map((code) => ({
    code,
    name: labels[code] ?? code,
    dialCode: `+${getCountryCallingCode(code)}`,
  }))
  .sort((first, second) => spanishCollator.compare(first.name, second.name));

const defaultCountry =
  countries.find((country) => country.code === "ES") ?? countries[0];

function FlagIcon({ country }: { country: CountryOption }) {
  const Flag = flags[country.code];

  return (
    <span
      aria-hidden="true"
      className="h-4 w-6 shrink-0 overflow-hidden rounded-[4px] ring-1 ring-black/10 [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
    >
      {Flag ? <Flag title={country.name} /> : null}
    </span>
  );
}

export function PhoneInput() {
  const [selectedCountry, setSelectedCountry] =
    useState<CountryOption>(defaultCountry);
  const [phoneNumber, setPhoneNumber] = useState<Value>();
  const [hasBlurred, setHasBlurred] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const isPhoneValid = Boolean(
    phoneNumber && isValidPhoneNumber(phoneNumber),
  );
  const showPhoneError = hasBlurred && !isPhoneValid;

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const nextTarget = event.relatedTarget as Node | null;
      if (!containerRef.current?.contains(nextTarget)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    containerRef.current?.addEventListener("focusout", handleFocusOut);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      containerRef.current?.removeEventListener("focusout", handleFocusOut);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const selectedIndex = countries.findIndex(
      (country) => country.code === selectedCountry.code,
    );
    optionRefs.current[selectedIndex]?.focus();
  }, [isOpen, selectedCountry.code]);

  useEffect(() => {
    phoneInputRef.current?.setCustomValidity(
      phoneNumber && !isPhoneValid
        ? `Introduce un número válido para ${selectedCountry.name}.`
        : "",
    );
  }, [isPhoneValid, phoneNumber, selectedCountry.name]);

  const selectCountry = (country: CountryOption) => {
    if (country.code !== selectedCountry.code) {
      setPhoneNumber(undefined);
      setHasBlurred(false);
    }
    setSelectedCountry(country);
    setIsOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const handleListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = optionRefs.current.findIndex(
      (option) => option === document.activeElement,
    );

    let nextIndex: number | undefined;
    if (event.key === "ArrowDown") nextIndex = (currentIndex + 1) % countries.length;
    if (event.key === "ArrowUp") {
      nextIndex = (currentIndex - 1 + countries.length) % countries.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = countries.length - 1;

    if (nextIndex !== undefined) {
      event.preventDefault();
      optionRefs.current[nextIndex]?.focus();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <input type="hidden" name="phonePrefix" value={selectedCountry.dialCode} />

      <div
        className={`flex rounded-lg border bg-surface-raised transition-colors focus-within:ring-4 ${
          showPhoneError
            ? "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/10"
            : "border-border focus-within:border-primary focus-within:ring-primary/10"
        }`}
      >
        <button
          ref={triggerRef}
          type="button"
          aria-label={`Prefijo telefónico: ${selectedCountry.name} ${selectedCountry.dialCode}`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls="phone-country-options"
          onClick={() => setIsOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              setIsOpen(true);
            }
          }}
          className="flex shrink-0 items-center gap-2 rounded-l-lg border-r border-border px-3 text-sm text-text-secondary transition-colors hover:bg-surface-hover focus-visible:z-10 focus-visible:outline-none"
        >
          <FlagIcon country={selectedCountry} />
          <span>{selectedCountry.dialCode}</span>
          <ChevronDown
            aria-hidden="true"
            className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <PhoneNumberInput
          ref={phoneInputRef}
          id="phone"
          name="phone"
          country={selectedCountry.code}
          value={phoneNumber}
          onChange={setPhoneNumber}
          onBlur={() => setHasBlurred(true)}
          required
          autoComplete="tel-national"
          placeholder="600 00 00 00"
          aria-invalid={showPhoneError}
          aria-describedby={showPhoneError ? "phone-error" : undefined}
          className="min-w-0 flex-1 rounded-r-lg bg-transparent px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none"
        />
      </div>

      {showPhoneError ? (
        <p
          id="phone-error"
          aria-live="polite"
          className="mt-2 text-xs text-red-600"
        >
          {phoneNumber
            ? `Introduce un número válido para ${selectedCountry.name}.`
            : "Introduce un número de teléfono."}
        </p>
      ) : null}

      {isOpen ? (
        <div
          id="phone-country-options"
          role="listbox"
          aria-label="Selecciona un prefijo telefónico"
          onKeyDown={handleListKeyDown}
          className="absolute left-0 top-full z-30 mt-2 max-h-72 w-80 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-xl border border-border bg-surface p-1.5 shadow-tooltip"
        >
          {countries.map((country, index) => {
            const isSelected = country.code === selectedCountry.code;

            return (
              <button
                key={country.code}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                type="button"
                role="option"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => selectCountry(country)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-text-primary transition-colors hover:bg-surface-hover focus:bg-surface-hover focus:outline-none"
              >
                <FlagIcon country={country} />
                <span className="min-w-0 flex-1 truncate">{country.name}</span>
                <span className="text-text-secondary">{country.dialCode}</span>
                <Check
                  aria-hidden="true"
                  className={`size-4 text-primary ${isSelected ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
