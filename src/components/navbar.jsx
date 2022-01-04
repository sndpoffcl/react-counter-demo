const Navbar = (props) => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <h1 class="navbar-brand mb-0 h1 m-2 text-success">
        Navbar {props.count}
      </h1>
    </nav>
  );
};

export default Navbar;
