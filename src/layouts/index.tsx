import { useEffect } from "react";
import { useRouter } from "next/router";
import Centered from "layouts/centered";
import useConfigStore from "store/common";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layouts: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useConfigStore();
  //dark mode 설정
  useEffect(() => {
    const root = window.document.documentElement;
    const backgroundClass = theme === "light" ? "dark" : "light";
    root.classList.remove(backgroundClass);
    root.classList.add(theme);
  }, [theme]);

  const router = useRouter();
  const { pathname } = router;

  //  // pathname에 따라 accessToken이 있는지 없는지 확인하여 없다면 로그인 페이지로 이동
  //  useEffect(() => {
  //    if (!pathname.startsWith("/login") && !pathname.startsWith("/signup") && !pathname.startsWith("/oauth")) {
  //      tokenHandler();
  //    }
  //  }, [pathname]);

  switch (pathname) {
    case "/500":
      return <Centered>{children}</Centered>;
    default:
      return <>{children}</>;
  }
};

export default Layouts;
