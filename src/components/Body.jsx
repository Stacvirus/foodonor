import Header from "./header/Header";
import Action from "./action/Action";
import Goals from "./goals/Goals";


export default function Body() {
  return (
    <>
      <Header />
      <Action head='Donations' action='donates' target='donation' />
      <Action head='Demand' action='demand' target='recipient' />
      <Goals />
    </>
  )
}