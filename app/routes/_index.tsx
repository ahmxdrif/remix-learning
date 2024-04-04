import type { MetaFunction } from "@remix-run/node";
import homeStyles from "../styles/home.css";
import { Link } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id = "content">
      <h1>A better way of keeping track of your notes.</h1>
      <p>You should try this app.</p>
      <p id="cta">
        <Link to="/notes">Enter Notes</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}