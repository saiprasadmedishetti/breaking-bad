import { UserType } from "../App";
import elements from "../../data/elements";
import { createElement } from "react";

type BreakingProps = {
  user: UserType;
};

export default function Breaking({
  user: { firstName, lastName },
}: BreakingProps) {
  const displayText = (value: string) => {
    if (!value) return;
    const matchIndex = elements.findIndex((item) =>
      value.toLowerCase().includes(item.toLowerCase())
    );

    if (matchIndex === -1) {
      return value;
    }

    const matchWord = value.match(new RegExp(elements[matchIndex], "gi"))!;

    return createElement(
      "span",
      null,
      <>
        <span
          className="flex flex-wrap"
          dangerouslySetInnerHTML={{
            __html: value.replace(
              new RegExp(matchWord[0], "g"),
              `<span class="bg-green-600 text-white">${matchWord[0]}</span>`
            ),
          }}
        ></span>
      </>
    );
  };

  return (
    <h1 className="flex flex-col gap-2 text-7xl font-bold leading-tight text-wrap flex-wrap">
      <span>{displayText(firstName)}</span>
      <span className="text-right">{displayText(lastName)}</span>
    </h1>
  );
}
