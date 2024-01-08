import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

export const useNavigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  return {
    router,
    params,
    searchParams,
    pathname,
  };
};
