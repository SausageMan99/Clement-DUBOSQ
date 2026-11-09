"""Inline fonts and images into moodboard.src.html -> moodboard.html (single self-contained file)."""
import base64, re, pathlib
root = pathlib.Path(__file__).parent
src = (root / "moodboard.src.html").read_text(encoding="utf-8")
mime = {".woff2": "font/woff2", ".jpg": "image/jpeg", ".png": "image/png"}
def repl(m):
    name = m.group(1)
    p = root / "assets" / name
    if not p.exists():
        p = root / "assets" / "fonts" / name
    return f"data:{mime[p.suffix]};base64," + base64.b64encode(p.read_bytes()).decode()
out = re.sub(r"\{\{([\w.\-]+)\}\}", repl, src)
(root / "moodboard.html").write_text(out, encoding="utf-8")
print(f"moodboard.html: {len(out)/1024:.0f} KB")
