import styles from "./inpWithoutArrows.module.css"

export function InputNum({ name, value, handleChange }) {

  return (
    <div>
      <button
        className={styles.valueControl}
        onClick={(e) => { e.preventDefault(); handleChange({ name: name, value: value - 1 }) }}>-</button>

      <input onChange={(e) => { handleChange({ name: name, value: e.target.value}) }}
        className={styles.valueInput}
        type="number"
        value={value}
        id={name}/>

      <button
        className={styles.valueControl}
        onClick={(e) => { e.preventDefault(); handleChange({ name: name, value: value + 1 }) }}>+</button>
    </div>
  )
}