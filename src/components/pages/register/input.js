const Input = ({ label, type, value, onChange, disabled }) => (
  <div>
    <label className="">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className=""
    />
  </div>
);

export default Input;
