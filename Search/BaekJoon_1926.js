/*
근접한 1을 찾아가는 문제이므로 BFS 사용
for문을 돌면서 1이 나올 때 마다 BFS를 사용하여 근접한 1의 갯수를 확인한다.
*/

const answer = ([input, ...data]) => {

    const [n, m] = input.split(' ').map(Number);
    const arr = data.map(list => list.split(' ').map(Number));

    const checked = Array.from({ length: n });

    for (let index = 0; index < checked.length; index++) {
        checked[index] = Array.from({ length: m }, () => false)
    }

    let cnt = 0;
    let maxValue = 0;

    const bfs = (x, y) => {
        let result = 1; //그림의 사이즈 bfs함수가 시작하면 일단 1을 찾은 것이기 때문에 1부터 시작
        const queue = [{ qx: x, qy: y }];
        const moveX = [1, 0, -1, 0];
        const moveY = [0, 1, 0, -1];

        // queue 가 빌 때 까지 반복
        while (queue.length) {
            const { qx, qy } = queue.pop();
            // 위,아래,오른쪽,왼쪽으로 이동하였을 경우에 확인
            for (let index = 0; index < 4; index++) {
                const mx = qx + moveX[index];
                const my = qy + moveY[index];

                // 이동하려는 방향의 크기가 배열의 크기 안에 들어오는지
                if ((0 <= mx && mx <= n - 1) && (0 <= my && my <= m - 1)) {
                    // 방문한적이 없고 그림이 그려져있는지
                    if (checked[mx][my] === false && arr[mx][my] === 1) {
                        checked[mx][my] = true;
                        result += 1;
                        queue.push({ qx: mx, qy: my })
                    }

                }
            }
        }

        return result;
    }

    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            //  값이 1이고, 체크한적이 없는 경우에 확인
            if (arr[x][y] === 1 && checked[x][y] === false) {
                // 카운트 횟수 증가
                cnt += 1;
                // 체크로 변경
                checked[x][y] = true;
                // BFS로 그림 넓이 확인
                maxValue = Math.max(maxValue, bfs(x, y))
            }
        }
    }

    console.log(cnt);
    console.log(maxValue);
}

const input = [];
require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
        input.push(line);
    })
    .on("close", () => {
        answer(input);
        process.exit();
    });