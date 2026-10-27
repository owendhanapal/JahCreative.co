// Lets any "Enquire about this" button hand its item to the enquiry form.
const EVENT = 'jah:enquire';

export function enquireAbout(item: string) {
  window.dispatchEvent(new CustomEvent<string>(EVENT, {detail: item}));
  document.getElementById('enquire')?.scrollIntoView({behavior: 'smooth'});
}

export function onEnquire(handler: (item: string) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<string>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
