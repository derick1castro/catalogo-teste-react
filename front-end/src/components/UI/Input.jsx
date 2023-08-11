function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-bold text-sm text-black" htmlFor={name}>
        {text}:
      </label>
      <input
        className="py-1 px-2 border rounded font-normal"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        multiple={true}
      />
    </div>
  );
}

export default Input;
