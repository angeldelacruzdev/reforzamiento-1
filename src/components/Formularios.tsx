import { useForm } from "../hooks/useForm";

const Formularios = () => {
  const { form, onChange, email, password } = useForm({
    email: "",
    password: "",
  });
  return (
    <div>
      <h3>Formularios</h3>
      <input
        type="text"
        placeholder="Email"
        className="form-control mt-2"
        value={email}
        onChange={({ target }) => onChange(target.value, "email")}
      />
      <input
        type="text"
        placeholder="password "
        className="form-control mb-2"
        value={password}
        onChange={({ target }) => onChange(target.value, "password")}
      />

      <code>
        <pre>{JSON.stringify(form)}</pre>
      </code>
    </div>
  );
};

export default Formularios;
