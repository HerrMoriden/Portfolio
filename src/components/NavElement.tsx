function NavElement(props: { text: string }) {
  return (
    <>
      <div>
        <a href="#">{props.text}</a>
      </div>
    </>
  );
}

export default NavElement;
