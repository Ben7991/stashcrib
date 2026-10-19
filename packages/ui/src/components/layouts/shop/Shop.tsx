import { ChildrenOnly } from '../../../lib/utils/types.utils';
import { Footer } from '../../organisms/footer/Footer';
import { Header } from '../../organisms/header/Header';

export function Shop({ children }: ChildrenOnly) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
