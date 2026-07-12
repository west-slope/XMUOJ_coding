from collections import deque
import sys
lines = sys.stdin.read().strip().split(chr(10))
out = []
i = 0
while i < len(lines):
    if not lines[i].strip(): i += 1; continue
    s = ''.join(lines[i].split())
    t = ''.join(lines[i+1].split()) if i+1 < len(lines) else '12345678x'
    i += 2
    if s == t: out.append('0'); continue
    # Check solvability (inversion count parity)
    inv_s = sum(1 for a in range(9) for b in range(a+1,9) if s[a]!='x' and s[b]!='x' and s[a]>s[b])
    inv_t = sum(1 for a in range(9) for b in range(a+1,9) if t[a]!='x' and t[b]!='x' and t[a]>t[b])
    if (inv_s % 2) != (inv_t % 2):
        out.append('-1'); continue
    d = {s: 0}
    q = deque([s])
    ans = -1
    while q and ans == -1:
        cur = q.popleft()
        k = cur.index('x')
        x, y = k // 3, k % 3
        for dx, dy in [(-1,0),(0,1),(1,0),(0,-1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < 3 and 0 <= ny < 3:
                nk = nx * 3 + ny
                ns = list(cur)
                ns[k], ns[nk] = ns[nk], ns[k]
                ns = ''.join(ns)
                if ns == t: ans = d[cur] + 1; break
                if ns not in d: d[ns] = d[cur] + 1; q.append(ns)
    out.append(str(ans))
print(chr(10).join(out))