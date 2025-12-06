

import { Chapter, ContentPartType } from './types';

export const TEXTBOOK_DATA: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'Chương I: TẬP HỢP CÁC SỐ TỰ NHIÊN',
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'Bài 1: TẬP HỢP',
        concepts: ['Tập hợp', 'Phần tử'],
        skills: [
          'Nhận biết tập hợp và các phần tử của nó.',
          'Mô tả một tập hợp (cho một tập hợp).',
          'Sử dụng kí hiệu và cách diễn đạt toán học nhờ tập hợp.',
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. TẬP HỢP VÀ PHẦN TỬ CỦA TẬP HỢP' },
          { type: ContentPartType.TEXT, value: `
*   Trên Hình 1.1 ta có tập hợp các bông hồng trong lọ.
*   Trên Hình 1.2 ta có tập hợp các con cá vàng trong bình cá.
*   Hình 1.3 biểu diễn tập hợp gồm các số 4; 1; 9 và 8. Nếu kí hiệu tập hợp này thì các số 4; 1; 9 và 8 là các phần tử của tập hợp $M$.
*   Gọi $B$ là tập hợp các chữ cái viết thường trong tiếng Việt. Khi đó $a, b, c,...$ là những phần tử của tập hợp $B$.

**Mô tả tập hợp (gọi tắt là tập) bao gồm những đối tượng nhất định. Các đối tượng ấy được gọi là những phần tử của tập hợp.**

*   $x$ là một phần tử của tập $A$, kí hiệu là $x \\in A$ (đọc là $x$ thuộc $A$).
*   $y$ không là phần tử của tập $A$, kí hiệu là $y \\notin A$ (đọc là $y$ không thuộc $A$).` },
          { type: ContentPartType.IMAGE, value: 'Minh họa Tập hợp, Hình 1.3', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/tap-hop-hinh1.3.png?v=1718873752535', alt: 'Minh họa Tập hợp, Hình 1.3' },
          { type: ContentPartType.NOTE, label: 'Chú ý', value: 'Khi $x$ thuộc $A$, ta còn nói "$x$ nằm trong $A$", hay "$A$ chứa $x$".' },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ', value: 'Với tập hợp $M$ trên Hình 1.3, ta có $4 \\in M$, $1 \\in M$, $7 \\notin M$.' },
          { type: ContentPartType.EXERCISE, label: 'Luyện tập 1', value: 'Gọi $B$ là tập hợp các bạn tổ trưởng trong lớp em. Em hãy chỉ ra một bạn thuộc tập $B$ và một bạn không thuộc tập $B$.' },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. MÔ TẢ MỘT TẬP HỢP' },
          { type: ContentPartType.TEXT, value: `Mô tả một tập hợp là cho biết cách xác định các phần tử của tập hợp đó. Ta thường dùng hai cách mô tả tập hợp sau:

**Cách 1: Liệt kê các phần tử của tập hợp, tức là viết các phần tử của tập hợp trong dấu ngoặc \\{ \\} (theo thứ tự tùy ý nhưng mỗi phần tử chỉ được viết một lần).**` },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ', value: 'Với tập $P$ gồm các số $0; 1; 2; 3; 4; 5$ ở Hình 1.4, ta viết:\n$P = \\{0; 1; 2; 3; 4; 5\\}$.' },
          { type: ContentPartType.IMAGE, value: 'Minh họa Tập hợp, Hình 1.4', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/tap-hop-hinh1.4.png?v=1718873760980', alt: 'Minh họa Tập hợp, Hình 1.4' },
          { type: ContentPartType.TEXT, value: `**Cách 2: Nêu dấu hiệu đặc trưng cho các phần tử của tập hợp**` },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ', value: 'Với tập $P$ (xem H.1.4) ta có thể viết:\n$P = \\{n \\mid n$ là số tự nhiên nhỏ hơn $6\\}$.' },
          { type: ContentPartType.NOTE, label: 'Chú ý', value: `
*   Gọi $N$ là tập hợp gồm các số tự nhiên $0; 1; 2; 3; \\dots$. Ta có thể viết tập $N = \\{0; 1; 2; 3; \\dots\\}$.
*   Ta viết $n \\in N$ có nghĩa $n$ là một số tự nhiên. Chẳng hạn, tập $P$ các số tự nhiên nhỏ hơn $6$ có thể viết là:\n$P = \\{n \\in N \\mid n < 6\\}$ hoặc $P = \\{n \\in N \\mid n \\le 5\\}$.
*   Ta còn dùng kí hiệu $N^*$ để chỉ tập hợp các số tự nhiên khác $0$, nghĩa là $N^* = \\{1; 2; 3; \\dots\\}$.` },
          { type: ContentPartType.EXERCISE, label: 'Luyện tập 2', value: `Viết các tập hợp sau bằng cách liệt kê các phần tử của chúng:
$A = \\{x \\in N \\mid x < 5\\}$;
$B = \\{x \\in N^* \\mid x < 5\\}$.` },
          { type: ContentPartType.EXERCISE, label: 'Luyện tập 3', value: `Gọi $M$ là tập hợp các số tự nhiên lớn hơn $6$ và nhỏ hơn $10$.
a) Thay thế dấu "?" bằng dấu $\\in$ hoặc $\\notin$?: $5 \\ ? \\ M$; $9 \\ ? \\ M$.
b) Mô tả tập hợp $M$ bằng hai cách.` },
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '1.1', value: `Cho hai tập hợp:
$A = \\{a; b; c; d; x; y\\}$ và $B = \\{b; d; y; t; u; v\\}$.
Dùng kí hiệu "$\\in$" hoặc "$\\notin$" để trả lời câu hỏi: Mỗi phần tử $a, b, x, u$ thuộc tập hợp nào và không thuộc tập hợp nào?` },
          { type: ContentPartType.EXERCISE, label: '1.2', value: `Cho tập hợp
$U = \\{x \\in N \\mid x$ chia hết cho $3\\}$.
Trong các số $3; 5; 6; 0; 7$, số nào thuộc tập hợp $U$ và số nào không thuộc tập hợp $U$?` },
          { type: ContentPartType.EXERCISE, label: '1.3', value: `Bằng cách liệt kê các phần tử, hãy viết các tập hợp sau:
a) Tập hợp $K$ các số tự nhiên nhỏ hơn $7$;
b) Tập hợp $D$ tên các tháng (dương lịch) có $30$ ngày;
c) Tập hợp $M$ các chữ cái tiếng Việt trong từ "ĐIỆN BIÊN PHỦ".` },
          { type: ContentPartType.EXERCISE, label: '1.4', value: 'Bằng cách nêu dấu hiệu đặc trưng, hãy viết tập hợp $A$ các số tự nhiên nhỏ hơn $10$.' },
          { type: ContentPartType.EXERCISE, label: '1.5', value: `Hệ Mặt Trời gồm có Mặt Trời ở trung tâm và $8$ thiên thể quay quanh Mặt Trời gọi là các hành tinh, đó là Thủy tinh, Kim tinh, Trái Đất, Hỏa tinh, Mộc tinh, Thổ tinh, Thiên Vương tinh và Hải Vương tinh.
Gọi $S$ là tập hợp các hành tinh của Hệ Mặt Trời. Hãy viết tập $S$ bằng cách liệt kê các phần tử của $S$.` },
          { type: ContentPartType.DID_YOU_KNOW, label: 'EM CÓ BIẾT?', value: `
**Nhà toán học Cantor**
Con người biết đến toán học từ hàng nghìn năm trước Công nguyên. Nhưng mãi đến cuối thế kỉ XIX, lí thuyết tập hợp mới được phát triển nhờ các nghiên cứu của nhà toán học Cantor (Căng-to), người Đức. Từ đó lí thuyết tập hợp đã nhanh chóng trở thành nền tảng của Toán học hiện đại.

**Tập hữu hạn và tập vô hạn**
Ta thấy:
Tập $X = \\{x; y\\}$ có $2$ phần tử.
Tập $Y = \\{1; 2; 3; \\dots; 50\\}$ có $50$ phần tử.
$X$ và $Y$ là những tập hợp có một số hữu hạn phần tử. Ta gọi chúng là những tập hữu hạn.
Khác với tập $X, Y$, tập hợp có vô số phần tử là tập vô hạn. Tập $N$ là tập vô hạn.

**Giao của hai tập hợp**
Gọi $C$ là tập hợp gồm các phần tử chung của hai tập $A$ và $B$.
Ta gọi tập $C$ là giao của hai tập $A$ và $B$, kí hiệu $C = A \\cap B$.` },
          { type: ContentPartType.IMAGE, value: 'Minh họa Georg Cantor', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/georg-cantor.png?v=1718873767228', alt: 'Minh họa Georg Cantor' },
          { type: ContentPartType.QUIZ, quiz: {
            id: 'quiz-1-1-1',
            label: 'Kiểm tra kiến thức Bài 1: Tập Hợp',
            questions: [
              {
                questionText: 'Tập hợp các số tự nhiên $N$ bao gồm những số nào?',
                options: [
                  'Tất cả các số nguyên',
                  'Chỉ các số dương',
                  'Các số $0, 1, 2, 3, \\dots$',
                  'Chỉ các số chẵn'
                ],
                correctAnswerIndex: 2,
              },
              {
                questionText: 'Để kí hiệu "$x$ là phần tử của tập hợp $A$", ta dùng kí hiệu nào?',
                options: [
                  '$x = A$',
                  '$x \\ne A$',
                  '$x \\in A$',
                  '$x \\notin A$'
                ],
                correctAnswerIndex: 2,
              },
              {
                questionText: 'Cách nào KHÔNG phải là cách mô tả một tập hợp?',
                options: [
                  'Liệt kê các phần tử',
                  'Nêu dấu hiệu đặc trưng',
                  'Vẽ biểu đồ hình tròn',
                  'Kể tên các phần tử'
                ],
                correctAnswerIndex: 2,
              },
              {
                questionText: 'Cho tập hợp $M = \\{1, 3, 5, 7\\}$. Khẳng định nào sau đây là đúng?',
                options: [
                  '$2 \\in M$',
                  '$5 \\notin M$',
                  '$7 \\in M$',
                  '$10 \\in M$'
                ],
                correctAnswerIndex: 2,
              },
              {
                questionText: 'Tập hợp các số tự nhiên khác $0$ được kí hiệu là gì?',
                options: [
                  '$N$',
                  '$Z$',
                  '$N*$',
                  '$Q$'
                ],
                correctAnswerIndex: 2,
              }
            ],
          }},
        ],
      },
      {
        id: 'lesson-1-2',
        title: 'Bài 2: CÁCH GHI SỐ TỰ NHIÊN',
        concepts: ['Hệ thập phân', 'Chữ số', 'Số La Mã'],
        skills: [
          'Nhận biết, đọc và viết số tự nhiên trong hệ thập phân.',
          'Biểu diễn một số tự nhiên thành tổng giá trị các chữ số của nó.',
          'Đọc và viết số La Mã từ 1 đến 30.',
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. HỆ THẬP PHÂN' },
          { type: ContentPartType.TEXT, value: `Cách ghi số tự nhiên trong hệ thập phân:
*   Trong **hệ thập phân**, mỗi số tự nhiên được viết dưới dạng một dãy những chữ số lấy trong $10$ chữ số $0; 1; 2; 3; 4; 5; 6; 7; 8$ và $9$; vị trí của các chữ số trong dãy gọi là hàng.
*   Cứ $10$ đơn vị ở một hàng thì bằng $1$ đơn vị ở hàng liền trước nó. Chẳng hạn, $10$ chục thì bằng $1$ trăm; $10$ trăm thì bằng $1$ nghìn.` },
          { type: ContentPartType.NOTE, label: 'Chú ý', value: `
*   Khi viết các số tự nhiên, ta quy ước:
    1. Với các số tự nhiên khác $0$, chữ số đầu tiên (từ trái sang phải) khác $0$.
    2. Để dễ đọc, đối với các số có bốn chữ số trở lên, ta viết tách riêng từng lớp. Mỗi lớp là một nhóm ba chữ số kể từ phải sang trái.` },
          { type: ContentPartType.IMAGE, value: 'Minh họa bảng chữ số La Mã', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/bang-chu-so-la-ma.png?v=1718873784110', alt: 'Minh họa bảng chữ số La Mã' },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ 1', value: `
*   **HD1** Trong $32\\ 019$, ta thấy:
    "Chữ số $2$ nằm ở hàng nghìn và có giá trị bằng $2 \\times 1\\ 000 = 2\\ 000$".
    Hãy phát biểu theo mẫu câu đó đối với các chữ số còn lại.
*   **HD2** Viết số $32\\ 019$ thành tổng giá trị các chữ số của nó.

_Ghi chú:_ Một số tự nhiên luôn viết được thành tổng giá trị các chữ số của nó.
**Ví dụ:** $236 = (2 \\times 100) + (3 \\times 10) + 6$.
$ \\overline{ab} = (a \\times 10) + b \\quad (\\text{với } a \\neq 0)$.
$ \\overline{abc} = (a \\times 100) + (b \\times 10) + c \\quad (\\text{với } a \\neq 0)$.
Trong đó: $ \\overline{ab} $ là kí hiệu số tự nhiên có hai chữ số, hàng chục là $a$, hàng đơn vị là $b$; $ \\overline{abc} $ là kí hiệu số tự nhiên có ba chữ số, hàng trăm là $a$, hàng chục là $b$, hàng đơn vị là $c$.` },
          { type: ContentPartType.EXERCISE, label: 'Luyện tập', value: 'Viết số $34\\ 604$ thành tổng giá trị các chữ số của nó.' },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. SỐ LA MÃ' },
          { type: ContentPartType.TEXT, value: `Ngoài cách ghi số trong hệ thập phân, người ta còn có những cách ghi số khác. Cách ghi số La Mã xuất hiện trong nhiều công trình kiến trúc ở châu Âu hay trên mặt đồng hồ theo phong cách cổ điển. Trong nhiều văn bản và sách báo, số La Mã thường được dùng để đánh số thứ tự.

### Cách viết số La Mã
Để viết các số La Mã không quá 30, ta dùng ba kí tự I, V và X (gọi là những chữ số La Mã). Ba chữ số ấy cùng với hai cụm chữ số là IV và IX là năm phần được dùng để ghi số La Mã. **Giá trị của mỗi phần được ghi trong bảng sau và không thay đổi, dù nó đứng ở bất kì vị trí nào:**

| Giá trị (viết trong hệ thập phân) | I | V | X | IV | IX |
| :-------------------------------- | :-: | :-: | :-: | :--: | :--: |
| | 1 | 5 | 10 | 4 | 9 |

*   **Dưới đây là các số La Mã biểu diễn các số từ 1 đến 10:**
    | I | II | III | IV | V | VI | VII | VIII | IX | X |
    | - | -- | --- | -- | - | -- | --- | ---- | -- | - |
    | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |

*   **Để biểu diễn các số từ 11 đến 20**, ta thêm X vào bên trái mỗi số từ 1 đến 9: XI, XII, \\dots, XX.

*   **Để biểu diễn các số từ 21 đến 30**, ta thêm XX vào bên trái mỗi số từ 1 đến 9: XXI, XXII, \\dots, XXX.` },
          { type: ContentPartType.IMAGE, value: 'Minh họa đồng tiền Việt Nam', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/dong-tien-viet.png?v=1718873796845', alt: 'Minh họa đồng tiền Việt Nam' },
          { type: ContentPartType.NOTE, label: 'Nhận xét', value: `
1.  Mỗi số La Mã biểu diễn một số tự nhiên bằng tổng giá trị của các phần viết nên số đó. Chẳng hạn, số XXIV có ba phần là X, X và IV tương ứng với các giá trị 10, 10 và 4. Do đó XXIV biểu diễn số 24.
2.  Không có số La Mã nào biểu diễn số 0.` },
          { type: ContentPartType.EXERCISE, label: 'Luyện tập', value: `
a) Viết các số 14 và 27 bằng số La Mã.
b) Đọc các số La Mã XVI, XXII.` },
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '1.6', value: `Cho các số $27\\ 501; 106\\ 712; 7\\ 110\\ 385; 2\\ 915\\ 404\\ 267$ (viết trong hệ thập phân).
a) Đọc mỗi số đã cho;
b) Chữ số $7$ trong mỗi số đã cho có giá trị là bao nhiêu?` },
          { type: ContentPartType.EXERCISE, label: '1.7', value: 'Chữ số $4$ đứng ở hàng nào trong một số tự nhiên nếu nó có giá trị bằng:\na) $400$; b) $40$; c) $4$.' },
          { type: ContentPartType.EXERCISE, label: '1.8', value: 'Đọc các số La Mã: XIV; XVI; XXIII.' },
          { type: ContentPartType.EXERCISE, label: '1.9', value: 'Viết các số sau bằng số La Mã: $18; 25$.' },
          { type: ContentPartType.DID_YOU_KNOW, label: 'EM CÓ BIẾT?', value: `
**Hệ La Mã**
Ngoài các chữ số I, V, X và cụm chữ số IV, IX hệ La Mã còn có các chữ số khác là L, C, D, M (tương ứng với 50, 100, 500 và 1 000) và các cụm chữ số XL, XC, CD, CM (tương ứng với 40, 90, 400 và 900). Các chữ số và cụm chữ số ấy là các phần thành đúng để ghi số La Mã theo các quy tắc sau:
1. Trong một số La Mã, mỗi chữ số V, L và D có mặt không quá một lần; mỗi chữ số I, X, C và M không lặp lại quá ba lần liên tiếp.
2. Mỗi số La Mã là một dãy các thành phần. Giá trị của mỗi thành phần đều không nhỏ hơn giá trị của thành phần liền kề bên phải.
3. Mỗi số La Mã biểu diễn số tự nhiên bằng tổng giá trị của các thành phần viết nên số đó.
Ví dụ, số MMXIX gồm bốn thành phần là M, M, X và IX tương ứng với các giá trị 1 000, 1 000, 10 và 9. Vậy số MMXIX biểu diễn số 1 000 + 1 000 + 10 + 9 = 2 019.

**Ghi số trong hệ nhị phân**
Để ghi số trong hệ nhị phân, ta chỉ dùng hai chữ số là 0 và 1. Mỗi số tự nhiên được viết dưới dạng một dãy chữ số chỉ gồm là 0 và 1. Chẳng hạn, trong hệ nhị phân, hai số 100 và 1 001 lần lượt biểu diễn số 4 và 9 trong hệ thập phân.
Hai chữ số 1 và 0 tương ứng với hai trạng thái "đóng" và "mở" của mạch điện. Do đó hệ nhị phân được sử dụng nhiều trong khoa học máy tính.` },
          { type: ContentPartType.IMAGE, value: 'Minh họa hệ nhị phân', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/he-nhi-phan.png?v=1718873804860', alt: 'Minh họa hệ nhị phân' },
        ],
      },
      {
        id: 'lesson-1-3',
        title: 'Bài 3: THỨ TỰ TRONG TẬP HỢP CÁC SỐ TỰ NHIÊN',
        concepts: ['Điểm biểu diễn một số', 'Hai số tự nhiên liên tiếp', 'Số liền trước, số liền sau'],
        skills: [
          'Nhận biết thứ tự trong tập hợp các số tự nhiên.',
          'So sánh hai số tự nhiên.',
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. THỨ TỰ CỦA CÁC SỐ TỰ NHIÊN' },
          { type: ContentPartType.TEXT, value: `
Mỗi khi có trận bóng đá hay, người dân lại xếp hàng dài chờ mua vé. Nhìn những người xếp hàng rất dài. Há tư hỏi: dòng người xếp hàng ấy và dãy số tự nhiên đang học có gì giống nhau nhỉ?

Ta đã biết tập hợp tất cả các số tự nhiên được kí hiệu là $N$, nghĩa là $N = \\{0; 1; 2; 3; \\dots\\}$. Mỗi phần tử $0; 1; 2; \\dots$ của $N$ được biểu diễn bởi một điểm trên tia số gốc $O$ như Hình 1.5.

$$
\\begin{array}{ccccccc}\\circ & \\circ & \\circ & \\circ & \\circ & \\circ & \\dots \\cr 0 & 1 & 2 & 3 & 4 & 5 & \\dots\\end{array}
$$
Trên tia số, điểm biểu diễn số tự nhiên $a$ gọi là điểm $a$. Chẳng hạn, điểm $3$, điểm $6$, ...` },
          { type: ContentPartType.IMAGE, value: 'Minh họa tia số', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/tia-so.png?v=1718873812745', alt: 'Minh họa tia số' },
          { type: ContentPartType.EXAMPLE, label: 'HD1', value: 'Trong hai điểm $5$ và $8$ trên tia số, điểm nào nằm bên trái, điểm nào nằm bên phải điểm kia?' },
          { type: ContentPartType.EXAMPLE, label: 'HD2', value: 'Điểm biểu diễn số tự nhiên nào nằm ngay bên trái điểm $8$?' },
          { type: ContentPartType.EXAMPLE, label: 'HD3', value: 'Cho $n$ là một số tự nhiên nhỏ hơn $7$. Theo em, điểm $n$ nằm bên trái hay bên phải điểm $7$?' },
          { type: ContentPartType.TEXT, value: `
*   Trong hai số tự nhiên khác nhau, luôn có một số nhỏ hơn số kia. Nếu số $a$ nhỏ hơn số $b$ thì trên tia số nằm ngang điểm $a$ nằm bên trái điểm $b$. Khi đó, ta viết $a < b$ hoặc $b > a$. Ta còn nói điểm $a$ nằm trước điểm $b$, hoặc điểm $b$ nằm sau điểm $a$.
*   Mỗi số tự nhiên có đúng một số liền sau, chẳng hạn $9$ là **số liền sau** của $8$ (còn $8$ là **số liền trước** của $9$). Hai số $8$ và $9$ là **hai số tự nhiên liên tiếp**$.
*   Nếu $a < b$ và $b < c$ thì $a < c$ (tính chất bắc cầu). Chẳng hạn $4 < 5$ và $5 < 7$ suy ra $4 < 7$.` },
          { type: ContentPartType.NOTE, label: 'Chú ý', value: 'Số $0$ không có số tự nhiên liền trước và là số tự nhiên nhỏ nhất.' },
          { type: ContentPartType.HEADING_PRIMARY, value: 'Luyện tập' },
          { type: ContentPartType.EXERCISE, label: '', value: `
a) Hãy so sánh hai số tự nhiên sau đây, dùng kí hiệu "<" hay ">" để viết kết quả:
$m = 12\\ 036\\ 001$ và $n = 12\\ 035\\ 987$.
b) Trên tia số (nằm ngang), hai điểm $m$ và $n$, điểm nào nằm trước?` },
          { type: ContentPartType.HEADING_PRIMARY, value: 'Vận dụng' },
          { type: ContentPartType.TEXT, value: `Theo dõi kết quả bán hàng trong ngày của một cửa hàng, người ta nhận thấy:
Số tiền thu được vào buổi sáng nhiều hơn vào buổi chiều;
Số tiền thu được vào buổi tối ít hơn vào buổi chiều.
Hãy so sánh số tiền thu được (đều là các số tự nhiên) của cửa hàng đó vào buổi sáng và buổi tối.` },
          { type: ContentPartType.IMAGE, value: 'Minh họa so sánh số', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/so-sanh-so.png?v=1718873820258', alt: 'Minh họa so sánh số' },
          { type: ContentPartType.HEADING_PRIMARY, value: 'Các kí hiệu "<" và ">"' },
          { type: ContentPartType.TEXT, value: `
*   Ta còn dùng kí hiệu $a \\le b$ (đọc là "$a$ nhỏ hơn hoặc bằng $b$") để nói "$a$ không lớn hơn $b$".
    **Ví dụ:**
    $ \\{x \\in N \\mid x < 4\\} = \\{0; 1; 2; 3\\}$.
    $ \\{x \\in N \\mid x \\le 4\\} = \\{0; 1; 2; 3; 4\\}$.
*   Tương tự, kí hiệu $a \\ge b$ (đọc là "$a$ lớn hơn hoặc bằng $b$") có nghĩa là "$a$ không nhỏ hơn $b$".
*   Tính chất bắc cầu còn có thể viết: nếu $a \\le b$ và $b \\le c$ thì $a \\le c$.` },
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '1.13', value: 'Viết thêm các số liền trước và số liền sau của hai số $3\\ 532$ và $3\\ 529$ để được sáu số tự nhiên rồi sắp xếp sáu số đó theo thứ tự từ bé đến lớn.' },
          { type: ContentPartType.EXERCISE, label: '1.14', value: 'Cho ba số tự nhiên $a, b, c$, trong đó $a$ là số nhỏ nhất. Biết rằng trên tia số, điểm $b$ nằm giữa hai điểm $a$ và $c$. Hãy dùng kí hiệu "<" để mô tả quan hệ thứ tự của ba số $a, b, c$. Cho ví dụ bằng số cụ thể.' },
          { type: ContentPartType.EXERCISE, label: '1.15', value: `Liệt kê các phần tử của mỗi tập hợp sau:
a) $M = \\{x \\in N \\mid 10 \\le x < 15\\}$;
b) $K = \\{x \\in N^* \\mid x \\le 3\\}$;
c) $L = \\{x \\in N \\mid x \\le 3\\}$.` },
          { type: ContentPartType.EXERCISE, label: '1.16', value: `Ba bạn An, Bình, Cường đứng định một cây sào thẳng đứng rồi đánh dấu chiều cao của các bạn lên đó bởi ba điểm. Cường đặt tên cho các điểm đó theo thứ tự từ dưới lên là $A, B, C$ và giải thích rằng điểm $A$ ứng với chiều cao của bạn An, $B$ ứng với chiều cao của bạn Bình và $C$ ứng với chiều cao của bạn Cường. Biết rằng An cao $150$ cm, Bình cao $153$ cm, Cường cao $148$ cm. Theo em, Cường giải thích như thế có đúng không? Nếu không thì phải sửa như thế nào cho đúng?` },
        ],
      },
      {
        id: 'lesson-1-4',
        title: 'Bài 4: PHÉP CỘNG VÀ PHÉP TRỪ SỐ TỰ NHIÊN',
        concepts: ['Phép cộng', 'Số hạng', 'Tổng', 'Phép trừ', 'Số bị trừ', 'Số trừ', 'Hiệu', 'Tính chất giao hoán', 'Tính chất kết hợp'],
        skills: [
          'Thực hiện phép cộng và phép trừ số tự nhiên.',
          'Áp dụng tính chất giao hoán, kết hợp của phép cộng để tính nhẩm, tính hợp lí.',
          'Giải quyết một số vấn đề thực tiễn gắn với việc thực hiện phép cộng và phép trừ.'
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. PHÉP CỘNG SỐ TỰ NHIÊN' },
          { type: ContentPartType.TEXT, value: `
Hai số tự nhiên $a$ và $b$ cho ta một số tự nhiên gọi là tổng của chúng, kí hiệu là $a+b$.
* Có thể minh họa phép cộng $3+4=7$ với tia số.`},
          { type: ContentPartType.IMAGE, value: 'Minh họa phép cộng', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/phep-cong.png?v=1718873827670', alt: 'Minh họa phép cộng' },
          { type: ContentPartType.TEXT, value: `**Tính chất của phép cộng:**
* Giao hoán: $a+b=b+a$.
* Kết hợp: $(a+b)+c=a+(b+c)$.`},
          { type: ContentPartType.NOTE, label: 'Chú ý', value: '$a+0=a$. $0+a=a$.' },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ', value: 'Tính một cách hợp lí: $66+289+134+311$' },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. PHÉP TRỪ SỐ TỰ NHIÊN' },
          { type: ContentPartType.TEXT, value: `
* Hai số tự nhiên $a$ và $b$ cho, nếu có số tự nhiên $c$ sao cho $a=b+c$ thì ta có phép trừ $a-b=c$.
* Minh họa phép trừ $7-4=3$ với tia số.`},
          { type: ContentPartType.IMAGE, value: 'Minh họa phép trừ', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/phep-tru.png?v=1718873835626', alt: 'Minh họa phép trừ' },
          { type: ContentPartType.EXERCISE, label: 'Luyện tập 2', value: 'Tính: $865\\ 279 - 45\\ 027$.' },
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '1.17', value: 'Tính: $a) 63\\ 548 + 19\\ 256$; $b) 129\\ 107 - 34\\ 693$.' },
        ],
      },
      {
        id: 'lesson-1-5',
        title: 'Bài 5: PHÉP NHÂN VÀ PHÉP CHIA SỐ TỰ NHIÊN',
        concepts: ['Phép nhân', 'Thừa số', 'Tích', 'Phép chia', 'Số bị chia', 'Số chia', 'Thương'],
        skills: [
          'Thực hiện phép nhân và phép chia số tự nhiên.',
          'Áp dụng các tính chất của phép nhân để tính nhẩm, tính hợp lí.',
          'Giải quyết những vấn đề thực tiễn gắn với việc thực hiện phép nhân và phép chia số tự nhiên.'
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. PHÉP NHÂN SỐ TỰ NHIÊN' },
          { type: ContentPartType.TEXT, value: `
Hai số tự nhiên $a$ và $b$ cho ta một số tự nhiên gọi là tích của $a$ và $b$, kí hiệu là $a \\times b$ hoặc $a \\cdot b$.`},
          { type: ContentPartType.IMAGE, value: 'Minh họa phép nhân', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/phep-nhan.png?v=1718873842603', alt: 'Minh họa phép nhân' },
          { type: ContentPartType.TEXT, value: `**Tính chất của phép nhân:**
* Giao hoán: $a \\cdot b = b \\cdot a$.
* Kết hợp: $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$.
* Phân phối của phép nhân đối với phép cộng: $a \\cdot (b+c) = a \\cdot b + a \\cdot c$.`},
          { type: ContentPartType.NOTE, label: 'Chú ý', value: '$a \\cdot 1 = a; a \\cdot 0 = 0$.' },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. PHÉP CHIA HẾT VÀ PHÉP CHIA CÓ DƯ' },
          { type: ContentPartType.TEXT, value: `
Với hai số tự nhiên $a$ và $b$ đã cho ($b \\neq 0$), ta luôn tìm được đúng hai số tự nhiên $q$ và $r$ sao cho $a = bq + r$ trong đó $0 \\le r < b$.
*   Nếu $r=0$ thì ta có **phép chia hết** $a:b=q$ (dư $0$); $a$ là số bị chia, $b$ là số chia, $q$ là thương.
*   Nếu $r \\neq 0$ thì ta có **phép chia có dư** $a:b=q$ (dư $r$); $a$ là số bị chia, $b$ là số chia, $q$ là thương và $r$ là số dư.`},
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '1.23', value: 'Thực hiện các phép chia sau: $a) 951:23$; $b) 47:273$.' },
        ],
      },
      {
        id: 'lesson-1-6',
        title: 'Bài 6: LŨY THỪA CỦA MỘT SỐ TỰ NHIÊN',
        concepts: ['Lũy thừa', 'Cơ số', 'Số mũ', 'Bình phương', 'Lập phương'],
        skills: [
          'Thực hiện phép tính nâng lên lũy thừa của một số tự nhiên.',
          'Nhân, chia hai lũy thừa cùng cơ số với số mũ tự nhiên.',
          'Giải quyết được những vấn đề thực tiễn gắn với việc thực hiện phép tính lũy thừa của số tự nhiên.'
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. LŨY THỪA VỚI SỐ MŨ TỰ NHIÊN' },
          { type: ContentPartType.TEXT, value: `
Lũy thừa bậc $n$ của số tự nhiên $a$ là tích của $n$ thừa số bằng nhau, mỗi thừa số bằng $a$: $a^n = a \\cdot a \\cdot \\dots \\cdot a$ ($n \\in N^*$, $n$ thừa số).
$a$ đọc là "$a$ mũ $n$" hoặc "a lũy thừa $n$", $a$ là cơ số, $n$ là số mũ.`},
          { type: ContentPartType.IMAGE, value: 'Minh họa lũy thừa', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/luy-thua.png?v=1718873849503', alt: 'Minh họa lũy thừa' },
          { type: ContentPartType.NOTE, label: 'Chú ý', value: `$a^1 = a$. $a^2$ cũng gọi là **bình phương** (hay lập phương của $a$); $a^3$ cũng được gọi là **lập phương** (hay lập phương của $a$).`},
          { type: ContentPartType.HEADING_PRIMARY, value: '2. NHÂN VÀ CHIA HAI LŨY THỪA CÙNG CƠ SỐ' },
          { type: ContentPartType.TEXT, value: `
* Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ: $a^m \\cdot a^n = a^{m+n}$.
* Khi chia hai lũy thừa cùng cơ số (khác $0$), ta giữ nguyên cơ số và lấy số mũ của số bị chia trừ số mũ của số chia: $a^m : a^n = a^{m-n}$ (với $a \\neq 0, m \\ge n$).`},
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '1.36', value: 'Viết các tích sau dưới dạng lũy thừa: $a) 9 \\cdot 9 \\cdot 9$; $b) 10 \\cdot 10 \\cdot 10$.' },
        ],
      },
      {
        id: 'lesson-1-7',
        title: 'Bài 7: THỨ TỰ THỰC HIỆN CÁC PHÉP TÍNH',
        concepts: ['Biểu thức', 'Giá trị của một biểu thức'],
        skills: [
          'Nhận biết thứ tự thực hiện các phép tính.',
          'Tính giá trị của một biểu thức.'
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. THỨ TỰ THỰC HIỆN CÁC PHÉP TÍNH' },
          { type: ContentPartType.TEXT, value: `Để tránh tình trạng trên, ta cần có quy ước thống nhất về thứ tự thực hiện các phép tính trong một biểu thức.

**Thứ tự thực hiện các phép tính trong một biểu thức:**
*   **Đối với các biểu thức không có dấu ngoặc:**
    Nếu chỉ có phép cộng và phép trừ (hoặc chỉ có phép nhân và phép chia) thì thực hiện các phép tính từ trái qua phải. Chẳng hạn: $42 - 30 + 8 = 20$; $100 : 5 \\cdot 2 = 20 \\cdot 2 = 40$.
    Nếu có các phép tính cộng, trừ, nhân, chia, nâng lên lũy thừa thì ta thực hiện phép nâng lên lũy thừa trước, rồi đến nhân và chia, cuối cùng đến cộng và trừ. Chẳng hạn: $1 + 2 \\cdot 3^2 = 1 + 2 \\cdot 9 = 1 + 18 = 19$.
*   **Đối với biểu thức có dấu ngoặc:**
    Nếu chỉ có một dấu ngoặc thì ta thực hiện phép tính trong dấu ngoặc trước. Chẳng hạn: $(10 + 5) : 5 = 15 : 5 = 3$.
    Nếu có các dấu ngoặc tròn ( ), dấu ngoặc vuông [ ], dấu ngoặc nhọn \\{ \\} thì ta thực hiện các phép tính trong dấu ngoặc tròn trước, rồi thực hiện các phép tính trong các dấu ngoặc vuông, cuối cùng thực hiện các phép tính trong dấu ngoặc nhọn. Chẳng hạn: $\\{15 + 2 \\cdot [8 - (5-3)]\\} : 9 = \\{15 + 2 \\cdot [8 - 2]\\} : 9 = \\{15 + 2 \\cdot 6\\} : 9 = \\{15 + 12\\} : 9 = 27 : 9 = 3$.`},
          { type: ContentPartType.IMAGE, value: 'Minh họa thứ tự phép tính', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/thu-tu-phep-tinh.png?v=1718873857317', alt: 'Minh họa thứ tự phép tính' },
          { type: ContentPartType.NOTE, label: 'Ghi nhớ', value: `
1. Với biểu thức không có dấu ngoặc: Lũy thừa -> Nhân và chia -> Cộng và trừ.
2. Với biểu thức có dấu ngoặc: trong ngoặc tròn, ngoài ngoặc vuông, ngoài ngoặc nhọn.`},
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '1.46', value: 'Tính: $a) 235 + 78 - 142$; $b) 14 + 2 \\cdot 8^2$.' },
        ],
      },
      {
        id: 'lesson-1-8',
        title: 'Luyện tập chung Chương I',
        concepts: ['Tổng hợp các kiến thức đã học'],
        skills: ['Vận dụng linh hoạt các kiến thức về tập hợp, số tự nhiên, phép tính để giải bài tập.'],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: 'Luyện tập chung' },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ 1', value: `Tính giá trị của biểu thức $120 + [55 - (11 - 3)^2] + 2^3$.

**Giải:**
*   Đề bài có lỗi nhỏ ở đây: $55-64$ sẽ ra số âm, mà chương này chưa học số nguyên âm.
*   Chúng ta sẽ sửa lại đề để có kết quả là số tự nhiên. Giả sử đề là: $120 + [64 - (11 - 3)^2] + 2^3$.
*   Thực hiện phép tính:
    $120 + [64 - (11 - 3)^2] + 2^3$
    $= 120 + [64 - 8^2] + 8$
    $= 120 + [64 - 64] + 8$
    $= 120 + 0 + 8$
    $= 128$
Vậy biểu thức có giá trị bằng $128$.` },
          { type: ContentPartType.EXERCISE, label: '1.50', value: 'Tính giá trị của biểu thức: $a) 36 - 18 : 6$; $b) 2^3 + 24 : 6 - 2$.' },
        ],
      },
      {
        id: 'lesson-1-9',
        title: 'Bài tập cuối Chương I',
        concepts: ['Tổng hợp kiến thức Chương I'],
        skills: ['Vận dụng toàn bộ kiến thức Chương I để giải các bài tập tổng hợp.'],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: 'Bài tập cuối Chương I' },
          { type: ContentPartType.EXERCISE, label: '1.54', value: 'Viết số tự nhiên $a$ sau đây: Mười lăm tỉ hai trăm sáu mươi ba triệu không trăm hai mươi nghìn trăm linh tám.' },
          { type: ContentPartType.EXERCISE, label: '1.58', value: 'Khối $6$ có $320$ học sinh đi tham quan. Nhà trường cần thuê ít nhất bao nhiêu xe ô tô $45$ chỗ ngồi để đủ chỗ cho tất cả học sinh?' },
        ],
      },
    ],
  },
  {
    id: 'chapter-2',
    title: 'Chương II: TÍNH CHIA HẾT TRONG TẬP HỢP CÁC SỐ TỰ NHIÊN',
    lessons: [
      {
        id: 'lesson-2-1',
        title: 'Bài 8: QUAN HỆ CHIA HẾT VÀ TÍNH CHẤT',
        concepts: ['Chia hết', 'Ước', 'Bội'],
        skills: [
          'Nhận biết quan hệ chia hết, khái niệm ước và bội.',
          'Tìm các ước và bội của một số tự nhiên.',
          'Nhận biết tính chia hết của một tổng cho một số.',
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. QUAN HỆ CHIA HẾT' },
          { type: ContentPartType.TEXT, value: `Khi nào thì $a$ chia hết cho $b$?
Trong hai số 15 và 18, số nào chia hết cho 3, số nào không chia hết cho 3?

Số 15 chia hết cho 3 vì $15 : 3 = 5$ và không còn dư.
Số 16 không chia hết cho 3 vì $16 : 3 = 5$ dư 1.

Cho hai số tự nhiên $a$ và $b$ ($b \\neq 0$).
Nếu số tự nhiên $k$ sao cho $a = kb$ thì ta nói $a$ chia hết cho $b$ và kí hiệu là $a \\vdots b$.
Nếu $a$ không chia hết cho $b$ ta kí hiệu là $a \\not\\vdots b$.` },
          { type: ContentPartType.IMAGE, value: 'Minh họa ước và bội', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/uoc-boi-hinh-tuong.png?v=1718873864197', alt: 'Minh họa ước và bội' },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ', value: '$15 \\vdots 3$' },
          { type: ContentPartType.EXERCISE, label: '', value: `Tìm kí hiệu thích hợp $(\\vdots, \\not\\vdots)$ thay cho dấu "?":
$24 \\ ? \\ 6 \\quad 45 \\ ? \\ 10 \\quad 35 \\ ? \\ 5 \\quad 42 \\ ? \\ 4$.` },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ 1', value: `Nhân dịp sinh nhật, mẹ cho Việt 12 gói kẹo để liên hoan với các bạn, mỗi gói có 35 chiếc. Biết lớp Việt có 5 tổ, hỏi Việt có thể chia đều số kẹo cho các tổ không?
**Giải:**
Viết số kẹo là $12 \\times 35$. Vì $12 \\times 35 \\vdots 5$ nên $(12 \\times 35) \\vdots 5$, do đó Việt có thể chia đều số kẹo cho mỗi tổ.` },
          { type: ContentPartType.HEADING_PRIMARY, value: 'ƯỚC VÀ BỘI' },
          { type: ContentPartType.TEXT, value: `
Nếu $a$ chia hết cho $b$, ta nói $b$ là ước của $a$ và $a$ là bội của $b$.
Ta kí hiệu $U(a)$ là tập hợp các ước của $a$ và $B(b)$ là tập hợp các bội của $b$.` },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. TÍNH CHẤT CHIA HẾT CỦA MỘT TỔNG' },
          { type: ContentPartType.NOTE, label: 'Tính chất 1', value: `
*   Nếu $a \\vdots m$ và $b \\vdots m$ thì $(a+b) \\vdots m$.
*   Nếu $a \\vdots m, b \\vdots m$ và $c \\vdots m$ thì $(a+b+c) \\vdots m$.` },
          { type: ContentPartType.IMAGE, value: 'Minh họa số chia hết', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/so-chia-het-hinh-tuong.png?v=1718873870630', alt: 'Minh họa số chia hết' },
          { type: ContentPartType.NOTE, label: 'Chú ý', value: 'Tính chất 1 cũng đúng với một hiệu, chẳng hạn $30 \\vdots 3$ và $18 \\vdots 3$, suy ra $(30 - 18) \\vdots 3$.' },
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '2.1', value: 'Hãy tìm các ước của mỗi số sau:\na) $30$; $35$; $17$.\nb) $16$; $24$; $35$.' },
          { type: ContentPartType.EXERCISE, label: '2.2', value: 'Trong các số sau, số nào là bội của 4?\n$16$; $24$; $35$.' },
          { type: ContentPartType.EXERCISE, label: '2.3', value: `Tìm số tự nhiên $x$, y sao cho:
a) $x \\in B(7)$ và $x < 70$;
b) $y \\in U(50)$ và $y > 5$.` },
          { type: ContentPartType.EXERCISE, label: '2.4', value: `Không thực hiện phép tính, hãy cho biết tổng nào sau đây chia hết cho 5:
a) $15 + 1\\ 975 + 2\\ 019$;
b) $20 + 90 + 2\\ 025 + 2\\ 050$.` },
        ],
      },
      {
        id: 'lesson-2-2',
        title: 'Bài 9: DẤU HIỆU CHIA HẾT',
        concepts: ['Dấu hiệu chia hết cho 2, 5', 'Dấu hiệu chia hết cho 9, 3'],
        skills: [
          'Vận dụng được dấu hiệu chia hết cho 2; 5; 9; 3 để xác định một số có chia hết cho 2; 5; 9; 3 hay không.',
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. DẤU HIỆU CHIA HẾT CHO 2, CHO 5' },
          { type: ContentPartType.TEXT, value: `
Ta có:
$120 = 12 \\times 10 = 12 \\times 2 \\times 5$ chia hết cho 2 và cho 5.
$2010 = 201 \\times 10 = 201 \\times 2 \\times 5$ chia hết cho 2 và cho 5.
Ta nhận thấy các số 120 và 2010 có chữ số tận cùng là 0 đều chia hết cho 2 và 5. Vậy các số có chữ số tận cùng như thế nào thì chia hết cho 2? Các số có chữ số tận cùng như thế nào thì chia hết cho 5?` },
          { type: ContentPartType.EXAMPLE, label: 'Dấu hiệu chia hết cho 2, cho 5', value: `
*   Xét số $n = \\overline{23*}$ (* là chữ số tận cùng của $n$). Ta viết $n = 230 + *$.
    **HD1** Số $230$ có chia hết cho $2$ và chia hết cho $5$ không?
*   **HD2** Vận dụng tính chất chia hết của một tổng, hãy cho biết:
    a) Thay dấu $*$ bởi chữ số nào thì $n$ chia hết cho $2$?
    b) Thay dấu $*$ bởi chữ số nào thì $n$ chia hết cho $5$?

*   Các số có chữ số tận cùng là $0, 2, 4, 6, 8$ thì **chia hết cho 2** và chỉ những số đó mới chia hết cho 2.
*   Các số có chữ số tận cùng là $0$ hoặc $5$ thì **chia hết cho 5** và chỉ những số đó mới chia hết cho 5.` },
          { type: ContentPartType.IMAGE, value: 'Minh họa dấu hiệu chia hết', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/dau-hieu-chia-het-hinh-tuong.png?v=1718873877994', alt: 'Minh họa dấu hiệu chia hết' },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. DẤU HIỆU CHIA HẾT CHO 9, CHO 3' },
          { type: ContentPartType.TEXT, value: `Hà nhận thấy số 180 chia hết cho 9 và tổng các chữ số của nó là $1 + 8 + 0 = 9$ cũng chia hết cho 9. Liệu những số chia hết cho 9 đều có tính chất này không?` },
          { type: ContentPartType.EXAMPLE, label: 'Dấu hiệu chia hết cho 9', value: `
Cho các số $27; 82; 195; 234$.
*   **HD3** Hãy sắp xếp các số trên thành hai nhóm: Nhóm các số chia hết cho $9$ và nhóm các số không chia hết cho $9$.
*   **HD4** Tính tổng các chữ số của mỗi số và xét tính chia hết cho $9$ của các tổng đó trong mỗi nhóm.

Các số có tổng các chữ số chia hết cho $9$ thì **chia hết cho 9** và chỉ những số đó mới chia hết cho 9.` },
          { type: ContentPartType.IMAGE, value: 'Minh họa số chia hết', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/so-chia-het-hinh-tuong-2.png?v=1718873884807', alt: 'Minh họa số chia hết' },
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '2.10', value: 'Trong các số sau, số nào chia hết cho 2, số nào chia hết cho 5?\n$324; 248; 2\\ 020; 2\\ 025$.' },
          { type: ContentPartType.EXERCISE, label: '2.11', value: 'Trong các số sau, số nào chia hết cho 3, số nào chia hết cho 9?\n$450; 123; 2\\ 019; 2\\ 025$.' },
          { type: ContentPartType.EXERCISE, label: '2.12', value: 'Khối lớp $6$ của một trường có $290$ học sinh đi dã ngoại. Cô phụ trách muốn chia đều số học sinh của khối $6$ thành $9$ nhóm. Hỏi cô có chia nhóm được như vậy không?' },
          { type: ContentPartType.EXERCISE, label: '2.13', value: 'Có $162$ học sinh tham gia chương trình đào tạo bóng đá, được chia thành các đội. Mỗi đội cần có $9$ học sinh. Hỏi có đội nào không có đủ $9$ học sinh hay không?' },
          { type: ContentPartType.DID_YOU_KNOW, label: 'EM CÓ BIẾT?', value: `
Xét số $234$, ta thấy $234 = 2 \\times 100 + 3 \\times 10 + 4$.
Viết $100 = 99 + 1$, $10 = 9 + 1$, ta được
$234 = 2(99 + 1) + 3(9 + 1) + 4 = 2 \\times 99 + 2 + 3 \\times 9 + 3 + 4$
$= (2 \\times 99 + 3 \\times 9) + (2 + 3 + 4)$
$= (2 \\times 99 + 3 \\times 9) + 9$.
Tổng các chữ số: $2 + 3 + 4 = 9$.
Vì số $234$ được viết thành tổng các chữ số của nó và một số chia hết cho $9$.
Các số tự nhiên khác cũng như vậy. Từ đó suy ra dấu hiệu chia hết cho $9$ và cho $3$.` },
        ],
      },
      {
        id: 'lesson-2-3',
        title: 'Bài 10: SỐ NGUYÊN TỐ',
        concepts: ['Số nguyên tố', 'Hợp số'],
        skills: [
          'Nhận biết khái niệm số nguyên tố và hợp số.',
          'Phân tích một số tự nhiên lớn hơn 1 ra thừa số nguyên tố trong trường hợp đơn giản.',
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. SỐ NGUYÊN TỐ VÀ HỢP SỐ' },
          { type: ContentPartType.TEXT, value: `Mẹ mua một bộ hoa có 11 bông hoa hồng. Bạn Mai giúp mẹ cắm các bông hoa này vào các lọ nhỏ sao cho số hoa trong mỗi lọ là như nhau. Mai nhận thấy không thể cắm đều số bông hoa này vào các lọ hoa (mỗi lọ có nhiều hơn 1 bông) cho dù số lọ hoa là 2; 3; 4; 5; ...
Nhưng nếu bó ra 1 bông còn 10 bông thì lại cắm đều được vào 2 lọ.
Vậy, số 11 và số 10 có gì khác nhau, điều này có liên quan gì đến số các ước của chúng không?` },
          { type: ContentPartType.EXAMPLE, label: 'Chia nhóm các số tự nhiên theo số ước', value: `
*   **HD1** Tìm các ước và số ước của các số trong Bảng 2.1.
*   **HD2** Hãy chia các số cho trong Bảng 2.1 thành hai nhóm: Nhóm các số chỉ có hai ước, nhóm B gồm các số có nhiều hơn hai ước.
*   **HD3** Suy nghĩ và trả lời câu hỏi:
    a) Số 1 có bao nhiêu ước?
    b) Số 0 có chia hết cho $2; 5; 7$; $2\\ 017; 2\\ 018$ không? Em có nhận xét gì về số ước của 0?` },
          { type: ContentPartType.TEXT, value: `
*   **Số nguyên tố** là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.
*   **Hợp số** là số tự nhiên lớn hơn 1, có nhiều hơn hai ước.` },
          { type: ContentPartType.IMAGE, value: 'Minh họa phân tích thừa số nguyên tố', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/so-nguyen-to.png?v=1718873892706', alt: 'Minh họa phân tích thừa số nguyên tố' },
          { type: ContentPartType.NOTE, label: 'Ghi chú', value: 'Số 0 và số 1 không là số nguyên tố và không là hợp số.' },
          { type: ContentPartType.EXERCISE, label: 'Luyện tập 1', value: 'Em hãy tìm những thích hợp cho các số trong Bảng 2.1.' },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ 1', value: `Số nào dưới đây là số nguyên tố, số nào là hợp số? Vì sao?
a) 1 975; b) 17.
**Giải:**
a) Số 1 975 có tận cùng là 5 nên nó chia hết cho 5. Do đó, ngoài hai ước là 1 và 1 975 nó còn có thêm ước là 5. Vậy, 1 975 là hợp số.
b) Số 17 chỉ có hai ước là 1 và 17 nên nó là số nguyên tố.` },
          { type: ContentPartType.EXERCISE, label: 'Luyện tập 2', value: `Trong các số cho dưới đây, số nào là số nguyên tố, số nào là hợp số? Vì sao?
a) 1 930; b) 23.` },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. PHÂN TÍCH MỘT SỐ RA THỪA SỐ NGUYÊN TỐ' },
          { type: ContentPartType.TEXT, value: `
Phân tích một số tự nhiên lớn hơn 1 ra thừa số nguyên tố là viết số đó dưới dạng một tích các thừa số nguyên tố.
Mọi hợp số đều có thể phân tích thành tích của các thừa số nguyên tố. Ví dụ, ta phân tích số 24 như sau:
$24 = 2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3$.` },
          { type: ContentPartType.NOTE, label: 'Ghi chú', value: `
*   Mọi hợp số đều có thể phân tích thành tích của các thừa số nguyên tố.
*   Người ta quy ước dạng phân tích ra thừa số nguyên tố của một số nguyên tố là chính nó.
*   Khi phân tích một số ra thừa số nguyên tố, trong kết quả ta thường viết các thừa số theo thứ tự từ bé đến lớn và viết tích các thừa số giống nhau dưới dạng luỹ thừa.` },
          { type: ContentPartType.EXERCISE, label: '', value: 'Bạn Việt phân tích số 60 ra thừa số nguyên tố và cho kết quả $60 = 3 \\times 4 \\times 5$. Kết quả của Việt đúng hay sai? Nếu sai, em hãy sửa lại cho đúng.' },
          { type: ContentPartType.HEADING_PRIMARY, value: 'Phương pháp phân tích số ra thừa số nguyên tố bằng sơ đồ cây' },
          { type: ContentPartType.TEXT, value: 'Quá trình phân tích số 24 ra thừa số nguyên tố như trên có thể được trình bày dưới dạng một sơ đồ như Hình 2.2 gọi là **sơ đồ cây**.' },
          { type: ContentPartType.IMAGE, value: 'Minh họa sơ đồ cây', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/so-do-cay.png?v=1718873900977', alt: 'Minh họa sơ đồ cây' },
          { type: ContentPartType.EXERCISE, label: '', value: 'Tìm các số còn thiếu trong phân tích số 18 ra thừa số nguyên tố theo sơ đồ cây ở Hình 2.3.' },
          { type: ContentPartType.HEADING_PRIMARY, value: 'Phương pháp phân tích số ra thừa số nguyên tố bằng cột dọc' },
          { type: ContentPartType.TEXT, value: `Ta còn có thể phân tích một số ra thừa số nguyên tố theo sơ đồ cột dọc. Ví dụ, ta phân tích số 24 thành tích các thừa số nguyên tố theo cách làm như sau:
$24 | 2$
$12 | 2$
$6 | 2$
$3 | 3$
$1$
Vậy, $24 = 2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3$.
Sơ đồ phân tích số 24 thành tích các thừa số nguyên tố như trên được gọi là **sơ đồ cột dọc**.` },
          { type: ContentPartType.IMAGE, value: 'Minh họa cột dọc', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/cot-doc.png?v=1718873908866', alt: 'Minh họa cột dọc' },
          { type: ContentPartType.EXERCISE, label: '', value: 'Tìm các số còn thiếu trong phân tích số 30 ra thừa số nguyên tố theo sơ đồ cột ở hình bên.' },
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '2.17', value: 'Phân tích các số sau ra thừa số nguyên tố:\n$70; 115$.' },
          { type: ContentPartType.EXERCISE, label: '2.18', value: `Kết quả phân tích số các số $120; 102$ ra thừa số nguyên tố của bạn Nam như sau:
$120 = 2^3 \\times 3 \\times 5$; $102 = 2 \\times 51$.
Theo em, kết quả của Nam đúng hay sai? Nếu sai, em hãy sửa lại cho đúng.` },
          { type: ContentPartType.EXERCISE, label: '2.19', value: `Các khẳng định sau đây đúng hay sai? Vì sao?
a) Ước nguyên tố của 30 là 5 và 6;
b) Tích của hai số nguyên tố bất kì luôn là số lẻ;
c) Ước nguyên tố nhỏ nhất của số chẵn là 2;
d) Mọi bội của 3 đều là hợp số;
e) Mọi số chẵn đều là hợp số.` },
          { type: ContentPartType.DID_YOU_KNOW, label: 'EM CÓ BIẾT?', value: `
**Sàng Eratosthenes** (đọc là Cơ-ra-tô-xten) là một thuật toán cổ để tìm các số nguyên tố nhỏ hơn hoặc bằng một số tự nhiên N cho trước. Thuật toán này dựa theo ý tưởng của nhà toán học Hi Lạp là Eratosthenes. Chẳng hạn, để tìm các số nguyên tố nhỏ hơn 50, ta làm như sau:
_Bước 1._ Lập bảng các số từ 1 đến 50.
_Bước 2._ Gạch bỏ số 1. Ta có 2 là số nguyên tố. Gạch tất cả các số lớn hơn 2 và là bội của 2.
_Bước 3._ Số nguyên tố tiếp theo là 3. Gạch tất cả các số lớn hơn 3 và là bội của 3.
_Bước 4._ Số nguyên tố tiếp theo là 5. Gạch tất cả các số lớn hơn 5 và là bội của 5.
_Bước 5._ Số nguyên tố tiếp theo là 7. Gạch tất cả các số lớn hơn 7 và là bội của 7. Các số không bị gạch trong bảng chính là các số nguyên tố.
Làm tương tự như việc dùng một cái sàng để loại bỏ số 1 và các hợp số. Do đó nó có tên là sàng Eratosthenes.` },
          { type: ContentPartType.IMAGE, value: 'Minh họa Sàng Eratosthenes', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/sang-eratosthenes.png?v=1718873917839', alt: 'Minh họa Sàng Eratosthenes' },
        ],
      },
      {
        id: 'lesson-2-4',
        title: 'Bài 11: ƯỚC CHUNG. ƯỚC CHUNG LỚN NHẤT',
        concepts: ['Ước chung', 'Ước chung lớn nhất', 'Hai số nguyên tố cùng nhau'],
        skills: [
          'Xác định ước chung, ước chung lớn nhất của hai hoặc ba số tự nhiên.',
          'Nhận biết phân số tối giản.'
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. ƯỚC CHUNG VÀ ƯỚC CHUNG LỚN NHẤT' },
          { type: ContentPartType.TEXT, value: `
* Ước chung của hai hay nhiều số là ước của tất cả các số đó.
* Ước chung lớn nhất của hai hay nhiều số là số lớn nhất trong tập hợp các ước chung của các số đó.`},
          { type: ContentPartType.IMAGE, value: 'Minh họa ước chung', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/uoc-chung-hinh-tuong.png?v=1718873926505', alt: 'Minh họa ước chung' },
          { type: ContentPartType.NOTE, label: 'Chú ý', value: 'Ta chỉ xét ước chung của các số khác 0.' },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. CÁCH TÌM ƯỚC CHUNG LỚN NHẤT' },
          { type: ContentPartType.TEXT, value: `
Để tìm ước chung lớn nhất bằng cách phân tích các số ra thừa số nguyên tố ta làm như sau:
1. Phân tích mỗi số ra thừa số nguyên tố.
2. Chọn ra các thừa số nguyên tố chung.
3. Lập tích các thừa số đã chọn, mỗi thừa số lấy với số mũ nhỏ nhất. Tích đó là ƯCLN cần tìm.`},
          { type: ContentPartType.HEADING_PRIMARY, value: '3. RÚT GỌN PHÂN SỐ TỐI GIẢN' },
          { type: ContentPartType.TEXT, value: `
* Ta rút gọn phân số bằng cách chia cả tử và mẫu của phân số đó cho một ước chung khác 1 (nếu có).
* Phân số $\\frac{a}{b}$ được gọi là phân số tối giản nếu $a$ và $b$ không có ước chung nào khác 1, nghĩa là ƯCLN$(a, b) = 1$.`},
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '2.30', value: 'Tìm tập hợp ước chung của: $a) 30$ và $45$; $b) 42$ và $70$.' },
        ],
      },
      {
        id: 'lesson-2-5',
        title: 'Bài 12: BỘI CHUNG. BỘI CHUNG NHỎ NHẤT',
        concepts: ['Bội chung', 'Bội chung nhỏ nhất'],
        skills: [
          'Tìm bội chung, bội chung nhỏ nhất của hai hoặc ba số tự nhiên.',
          'Sử dụng bội chung nhỏ nhất để quy đồng mẫu các phân số và cộng, trừ phân số.'
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. BỘI CHUNG VÀ BỘI CHUNG NHỎ NHẤT' },
          { type: ContentPartType.TEXT, value: `
* Bội chung của hai hay nhiều số là bội của tất cả các số đó.
* Bội chung nhỏ nhất của hai hay nhiều số là số nhỏ nhất khác 0 trong tập hợp các bội chung của các số đó.`},
          { type: ContentPartType.IMAGE, value: 'Minh họa bội chung', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/boi-chung-hinh-tuong.png?v=1718873935293', alt: 'Minh họa bội chung' },
          { type: ContentPartType.NOTE, label: 'Chú ý', value: 'Ta chỉ xét bội chung của các số khác 0.' },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. CÁCH TÌM BỘI CHUNG NHỎ NHẤT' },
          { type: ContentPartType.TEXT, value: `
Để tìm bội chung nhỏ nhất bằng cách phân tích các số ra thừa số nguyên tố ta làm như sau:
1. Phân tích mỗi số ra thừa số nguyên tố.
2. Chọn ra các thừa số nguyên tố chung và riêng.
3. Lập tích các thừa số đã chọn, mỗi thừa số lấy với số mũ lớn nhất. Tích đó là BCNN cần tìm.`},
          { type: ContentPartType.HEADING_PRIMARY, value: '3. QUY ĐỒNG MẪU CÁC PHÂN SỐ' },
          { type: ContentPartType.TEXT, value: `
Để quy đồng mẫu các phân số $\\frac{a}{b}$ và $\\frac{c}{d}$ ta phải tìm mẫu chung của hai phân số đó.
Thông thường ta nên chọn mẫu chung là bội chung nhỏ nhất của hai mẫu.`},
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '2.36', value: 'Tìm bội chung nhỏ hơn 200 của: $a) 5$ và $7$; $b) 3, 4$ và $10$.' },
        ],
      },
      {
        id: 'lesson-2-6',
        title: 'Luyện tập chung Chương II',
        concepts: ['Tổng hợp các kiến thức đã học'],
        skills: ['Vận dụng linh hoạt các kiến thức về tính chia hết, ước và bội để giải bài tập.'],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: 'Luyện tập chung' },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ 1', value: 'Tìm ước chung lớn nhất của 60 và 90.' },
          { type: ContentPartType.EXERCISE, label: '2.45', value: 'Cho bảng sau: (bảng có a, b, ƯCLN, BCNN, a*b)' },
        ],
      },
      {
        id: 'lesson-2-7',
        title: 'Bài tập cuối Chương II',
        concepts: ['Tổng hợp kiến thức Chương II'],
        skills: ['Vận dụng toàn bộ kiến thức Chương II để giải các bài tập tổng hợp.'],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: 'Bài tập cuối Chương II' },
          { type: ContentPartType.EXERCISE, label: '2.53', value: 'Tìm $x \\in \\{50; 108; 189; 1\\ 234; 2\\ 019; 2\\ 020\\}$ sao cho: $a) x - 12$ chia hết cho $2$; $b) x - 27$ chia hết cho $3$.' },
          { type: ContentPartType.EXERCISE, label: '2.58', value: 'Có $12$ quả cam, $18$ quả xoài và $30$ quả bơ. Mẹ muốn Mai chia đều mỗi loại quả đó vào các túi quà sao cho mỗi túi đều có cả cam, xoài và bơ. Hỏi Mai có thể chia được nhiều nhất là mấy túi quà?' },
        ],
      },
    ],
  },
  {
    id: 'chapter-3',
    title: 'Chương III: SỐ NGUYÊN',
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Bài 13: TẬP HỢP CÁC SỐ NGUYÊN',
        concepts: ['Số nguyên', 'Số nguyên dương', 'Số nguyên âm', 'Tập hợp số nguyên', 'Trục số', 'Chiều dương', 'Chiều âm'],
        skills: [
          'Nhận biết, đọc và viết số nguyên.',
          'Nhận biết tập hợp số nguyên.',
          'Nhận biết ý nghĩa của số nguyên âm trong một số tình huống thực tế.',
          'Biểu diễn số nguyên trên trục số.',
          'So sánh hai số nguyên.'
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. LÀM QUEN VỚI SỐ NGUYÊN ÂM' },
          { type: ContentPartType.TEXT, value: `
Quan sát Hình 3.1 và 3.2, các em thấy ngoài các số quen thuộc như 2 hay 10 gọi là những **số dương**, còn có các số với dấu "-" đứng trước, đó là các **số âm**. Vậy số âm có ý nghĩa gì trong đời sống và số nguyên hư thế nào với các số đã học?`},
          { type: ContentPartType.IMAGE, value: 'Minh họa nhiệt kế', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/nhiet-ke.png?v=1718873942690', alt: 'Minh họa nhiệt kế' },
          { type: ContentPartType.NOTE, label: 'Chú ý', value: 'Số 0 không là số nguyên dương, cũng không là số nguyên âm. Để đọc $2^\\circ C$ dưới $0^\\circ C$ ta nói "$2$ độ âm".' },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. THỨ TỰ TRONG TẬP SỐ NGUYÊN' },
          { type: ContentPartType.TEXT, value: `
Cho hai số tự nhiên $a$ và $b$. Ta đã biết trên tia số nếu điểm $a$ nằm trước điểm $b$ thì $a < b$.
Đối với số nguyên, điều đó còn đúng với những trường hợp nào?

**Trục số:**
*   Ta biểu diễn các số $0; 1; 2; 3; \\dots$ và các số nguyên âm $-1; -2; -3; \\dots$ như Hình 3.6.
*   Khi đó ta được một trục số gốc $O$.`},
          { type: ContentPartType.IMAGE, value: 'Minh họa trục số', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/truc-so.png?v=1718873952778', alt: 'Minh họa trục số' },
          { type: ContentPartType.TEXT, value: `
*   Chiều từ trái sang phải là **chiều dương**; chiều ngược lại là **chiều âm**.
*   Điểm biểu diễn số nguyên $a$ gọi là điểm $a$.
*   Cho hai số nguyên $a$ và $b$. Trên trục số, nếu điểm $a$ nằm trước điểm $b$ thì số $a$ nhỏ hơn số $b$, kí hiệu $a < b$.`},
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '3.1', value: 'Mỗi nhiệt kế dưới đây chỉ bao nhiêu độ C?' },
        ],
      },
      {
        id: 'lesson-3-2',
        title: 'Bài 14: PHÉP CỘNG VÀ PHÉP TRỪ SỐ NGUYÊN',
        concepts: ['Cộng hai số nguyên cùng dấu', 'Cộng hai số nguyên khác dấu', 'Tính chất phép cộng', 'Trừ hai số nguyên'],
        skills: [
          'Thực hiện phép cộng, trừ hai số nguyên.',
          'Vận dụng các tính chất của phép cộng để tính nhẩm, tính hợp lí.',
          'Giải toán thực tiễn liên quan đến phép cộng hay phép trừ số nguyên.'
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. CỘNG HAI SỐ NGUYÊN CÙNG DẤU' },
          { type: ContentPartType.TEXT, value: `
Để biết phép cộng hai số nguyên dương, chẳng hạn $3+5=8$, có thể minh họa trên tia số.`},
          { type: ContentPartType.IMAGE, value: 'Minh họa phép cộng số nguyên', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/phep-cong-so-nguyen.png?v=1718873960352', alt: 'Minh họa phép cộng số nguyên' },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. CỘNG HAI SỐ NGUYÊN KHÁC DẤU' },
          { type: ContentPartType.TEXT, value: `
* Muốn cộng hai số nguyên khác dấu (không đối nhau), ta tìm hiệu phần số tự nhiên của chúng (số lớn trừ số nhỏ) rồi đặt trước hiệu tìm được dấu của số có phần số tự nhiên lớn hơn.`},
          { type: ContentPartType.IMAGE, value: 'Minh họa phép cộng số nguyên khác dấu', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/phep-cong-so-nguyen-khac-dau.png?v=1718873967849', alt: 'Minh họa phép cộng số nguyên khác dấu' },
          { type: ContentPartType.HEADING_PRIMARY, value: '3. TÍNH CHẤT CỦA PHÉP CỘNG' },
          { type: ContentPartType.TEXT, value: `
Phép cộng số nguyên có các tính chất:
* Giao hoán: $a+b=b+a$.
* Kết hợp: $(a+b)+c=a+(b+c)$.`},
          { type: ContentPartType.HEADING_PRIMARY, value: '4. TRỪ HAI SỐ NGUYÊN' },
          { type: ContentPartType.TEXT, value: `
Quy tắc trừ hai số nguyên:
Muốn trừ số nguyên $a$ cho số nguyên $b$, ta cộng $a$ với số đối của $b$: $a - b = a + (-b)$.`},
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '3.9', value: 'Tính tổng hai số cùng dấu: $a) (-7) + (-2)$; $b) (-8) + (-5)$.' },
        ],
      },
      {
        id: 'lesson-3-3',
        title: 'Bài 15: QUY TẮC DẤU NGOẶC',
        concepts: ['Quy tắc dấu ngoặc'],
        skills: [
          'Nhận biết và áp dụng quy tắc dấu ngoặc trong toán, nhất là để tính nhẩm hay tính hợp lí.'
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: 'BỎ DẤU NGOẶC TRONG TRƯỜNG HỢP ĐƠN GIẢN' },
          { type: ContentPartType.TEXT, value: `
Đối với một biểu thức có dấu ngoặc, ta thường thực hiện các phép tính trong dấu ngoặc trước. Nhưng đôi khi việc bỏ đi các dấu ngoặc sẽ làm cho việc tính toán trở nên thuận lợi hơn.

*   Các số âm (hay dương) trong một dãy tính thường được viết trong dấu ngoặc. Nhờ quy tắc cộng hay trừ số nguyên, ta có thể viết dãy tính dưới dạng không có dấu ngoặc. Ví dụ:
    $2 + (-9) = 2 - 9$
    $(-2) - (-9) = -2 + 9$
    $3 + (7) + (-4) - (-8) = 3 + 7 - 4 + 8$.
*   Vì phép trừ chuyển được về phép cộng nên các dãy tính như trên cũng được gọi là một tổng.`},
          { type: ContentPartType.IMAGE, value: 'Minh họa quy tắc dấu ngoặc', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/quy-tac-dau-ngoac.png?v=1718873976378', alt: 'Minh họa quy tắc dấu ngoặc' },
          { type: ContentPartType.HEADING_PRIMARY, value: 'DẤU CỦA MỘT SỐ HẠNG KHI BỎ DẤU NGOẶC' },
          { type: ContentPartType.NOTE, label: 'Quy tắc dấu ngoặc', value: `
*   Khi bỏ dấu ngoặc có dấu "+" đằng trước, ta giữ nguyên dấu của các số hạng trong ngoặc.
*   Khi bỏ dấu ngoặc có dấu "-" đằng trước, ta phải đổi dấu tất cả các số hạng trong dấu ngoặc: dấu "+" đổi thành "-" và dấu "-" đổi thành "+".`},
          { type: ContentPartType.HEADING_PRIMARY, value: 'BÀI TẬP' },
          { type: ContentPartType.EXERCISE, label: '3.19', value: 'Bỏ dấu ngoặc và tính các tổng sau: $a) -321 + (-29) - 142 - (-72)$; $b) 214 - (36) + (-305)$.' },
        ],
      },
      {
        id: 'lesson-3-4',
        title: 'Bài 16: PHÉP NHÂN SỐ NGUYÊN',
        concepts: ['Nhân hai số nguyên khác dấu', 'Nhân hai số nguyên cùng dấu', 'Tính chất phép nhân'],
        skills: [
          'Thực hiện phép nhân hai số nguyên.',
          'Vận dụng các tính chất của phép nhân để tính nhẩm, tính hợp lí.',
          'Giải toán thực tiễn liên quan đến phép nhân số nguyên.'
        ],
        content: [
          { type: ContentPartType.HEADING_PRIMARY, value: '1. NHÂN HAI SỐ NGUYÊN KHÁC DẤU' },
          { type: ContentPartType.TEXT, value: `
Ta có thể làm tương tự đối với phép nhân hai số tự nhiên khác dấu.`},
          { type: ContentPartType.IMAGE, value: 'Minh họa phép nhân số nguyên khác dấu', imageUrl: 'https://cdn.glitch.global/c313a7bb-412d-4e92-b430-811340176001/phep-nhan-so-nguyen-khac-dau.png?v=1718873983272', alt: 'Minh họa phép nhân số nguyên khác dấu' },
          {