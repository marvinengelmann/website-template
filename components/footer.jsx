"use client";

import dayjs from "dayjs";
import Container from "@/components/ui/container";

const Footer = () => (
  <footer className="bg-neutral-500 text-white py-16">
    <Container>
      <div>
        &copy; {dayjs().year()} Hallo Welt GmbH. Alle Rechte vorbehalten.
      </div>
    </Container>
  </footer>
);

export default Footer;
