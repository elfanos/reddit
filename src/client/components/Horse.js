// @flow
import * as React from "react";
import idx from "idx";
import { formatName } from "../../utils/formatName";
import { helvetica } from "../styles/fonts";
const Horse = ({ horse }: *) => {
  const name = idx(horse, _ => _.pedigree.father.name);
  return (
    <div css={{ ...helvetica, textAlign: "left" }}>
      <div>{`Hästens pappa: ${name || ""}`}</div>
      <div>
        {`Tränare: ${formatName(
          idx(horse, _ => _.trainer.firstName) || "",
          idx(horse, _ => _.trainer.lastName) || ""
        )}`}
      </div>
    </div>
  );
};

export default Horse;
