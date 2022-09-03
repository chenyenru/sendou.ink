import type { AbilityWithUnknown } from "~/modules/in-game-lists/types";
import { abilityImageUrl } from "~/utils/urls";
import { Image } from "./Image";

const sizeMap = {
  MAIN: 42,
  SUB: 32,
  TINY: 22,
} as const;

export function Ability({
  ability,
  size,
}: {
  ability: AbilityWithUnknown;
  size: keyof typeof sizeMap;
}) {
  const sizeNumber = sizeMap[size];

  return (
    <div
      className="build__ability"
      style={
        {
          "--ability-size": `${sizeNumber}px`,
        } as any
      }
    >
      {/* xxx: make ticket for this or fix */}
      <Image alt="" path={abilityImageUrl(ability)} />
    </div>
  );
}
