import { InputNum } from "./inputs/inpWithoutArrows";



export function InputsSection({values, handleChange, aspectLabels}) {
return <form>
{Object.keys(values).map((key) => (
  <div className="form-group" key={key}>
    <h4>{`${aspectLabels[key]}:`}</h4>
    <InputNum
      name={key}
      value={values[key]}
      handleChange={handleChange} />
  </div>
))}
</form>
}
