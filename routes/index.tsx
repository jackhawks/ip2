import { Handlers, PageProps } from "$fresh/server.ts";

interface Data {
  remoteIp: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const remoteIp = ctx.remoteAddr.hostname;
    return ctx.render({ remoteIp });
  },
};

export default function MyPage(props: PageProps<Data>) {
  return <p>you ip is: {props.data.remoteIp}</p>;
}
