import { ContactProvider } from './contact/ContactProvider';
import ComponentA from './contact/ContactManager';

export default function Page() {
  return (
    <ContactProvider>
      <ComponentA />
    </ContactProvider>
  );
}
