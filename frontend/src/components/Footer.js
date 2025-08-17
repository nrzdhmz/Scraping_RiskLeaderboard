export default function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="app-footer">
      <p>Made by Sugar © {currentYear}</p>
    </footer>
  );
}
