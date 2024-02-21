import "@/styles/globals.css";
import { clsx } from "clsx";
import Providers from "@/app/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { sans, serif } from "@/utils/fonts";

export const metadata = {
  title: "Meta Title",
  description: "Meta Description",
};

const RootLayout = ({ children }) => (
  <html lang="de" className="light">
    <body
      className={clsx(
        sans.variable,
        serif.variable,
        "font-sans text-neutral-950 leading-normal"
      )}
    >
      <Providers>
        <Header />
        <main>{children}</main>
        <Footer />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
