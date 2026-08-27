'use client';

import { useId, useState } from 'react';

export const NewsletterForm = ({ className }: { className?: string }) => {
  const id = useId();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <div className={`flex flex-col gap-2.5 ${className ?? ''}`}>
      <form
        className="flex flex-col gap-2.5 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <label htmlFor={id} className="sr-only">
          Tu correo
        </label>
        <input
          id={id}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          className="border-primary/30 bg-primary/10 text-primary placeholder:text-primary/50 focus-visible:border-primary h-12 w-full rounded-xl border px-5 text-base outline-none transition-colors duration-300"
        />
        <button
          type="submit"
          className="bg-primary text-secondary hover:bg-primary/85 h-12 shrink-0 cursor-pointer rounded-xl px-8 text-base font-medium transition-colors duration-300"
        >
          Suscribirme
        </button>
      </form>

      <p aria-live="polite" className="text-primary/75 min-h-5 text-sm">
        {sent ? '¡Listo! Te escribiremos pronto.' : ''}
      </p>
    </div>
  );
}
