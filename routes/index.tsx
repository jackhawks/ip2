import { Handlers, PageProps } from "$fresh/server.ts";
import { re } from "$std/semver/_shared.ts";

interface Data {
  ip1: string | null;
  ip2: string | null;
  ip3: string | null;
  ip4: string | null;
  ip5: string | null;
  ip6: string | null;
  ip7: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const ip1 = req.headers.get("X-Forwarded-For");
    const ip2 = req.headers.get("Forwarded");
    const ip3 = req.headers.get("X-Real-IP");
    const ip4 = req.headers.get("CF-Connecting-IP");
    const ip5 = req.headers.get("CF-Connecting-IPv6");
    const ip6 = req.headers.get("True-Client-IP");
    const ip7 = ctx.remoteAddr.hostname;

    req.headers.forEach((item, index) => {
      console.log(index, " ====> ", item);
    });
    console.log()

    return ctx.render({
      ip1,
      ip2,
      ip3,
      ip4,
      ip5,
      ip6,
      ip7,
    });
  },
};

export default function MyPage(props: PageProps<Data>) {
  return (
    <>
      <p>you ip is1: {props.data.ip1}</p>
      <p>you ip is2: {props.data.ip2}</p>
      <p>you ip is3: {props.data.ip3}</p>
      <p>you ip is4: {props.data.ip4}</p>
      <p>you ip is5: {props.data.ip5}</p>
      <p>you ip is6: {props.data.ip6}</p>
      <p>you ip is6: {props.data.ip7}</p>
    </>
  );
}
