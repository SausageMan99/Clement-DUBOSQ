import base64,re,pathlib
root=pathlib.Path(__file__).parent
src=(root/'moodboard-v2.src.html').read_text(encoding='utf-8')
mime={'.woff2':'font/woff2','.jpg':'image/jpeg','.png':'image/png'}
def r(m):
    n=m.group(1); p=root/'img'/n
    if not p.exists(): p=root/'fonts'/n
    return f"data:{mime[p.suffix]};base64,"+base64.b64encode(p.read_bytes()).decode()
out=re.sub(r"\{\{([\w.\-]+)\}\}",r,src); (root/'moodboard-v2.html').write_text(out,encoding='utf-8'); print(len(out)//1024,'KB')
