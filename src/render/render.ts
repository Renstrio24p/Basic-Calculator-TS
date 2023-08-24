
import UniqueHash from "../security/hashes";
import { FifthButtons, FirstButtons, FourthButtons, SecondButtons, ThirdButtons } from "../ts/components/buttons";

export default function Render() {
  // Get Render's ID
  const FirstGroup = document.getElementById('firstGroup') as HTMLDivElement | null,
        SecondGroup = document.getElementById('secondGroup') as HTMLDivElement | null,
        ThirdGroup = document.getElementById('thirdGroup') as HTMLDivElement | null,
        FourthGroup = document.getElementById('fourthGroup') as HTMLDivElement | null,
        FifthGroup = document.getElementById('fifthGroup') as HTMLDivElement | null;
        // DisplayOutput = document.getElementById('display') as HTMLInputElement | null;


  // Hash Applied
  window.addEventListener('DOMContentLoaded', () => {
    FirstGroup?.setAttribute('id',UniqueHash());
    SecondGroup?.setAttribute('id',UniqueHash());
    ThirdGroup?.setAttribute('id',UniqueHash());
    FourthGroup?.setAttribute('id',UniqueHash());
    FifthGroup?.setAttribute('id',UniqueHash());
    // DisplayOutput?.setAttribute('id',UniqueHash());
  });

  // Render the JS Component

  // if the const valuable has a value then it will render the component
  {FirstGroup && FirstButtons(FirstGroup)}
  {SecondGroup && SecondButtons(SecondGroup)}
  {ThirdGroup && ThirdButtons(ThirdGroup)}
  {FourthGroup && FourthButtons(FourthGroup)}
  {FifthGroup && FifthButtons(FifthGroup)}
}
