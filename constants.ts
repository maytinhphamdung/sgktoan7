
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
          { type: ContentPartType.NOTE, label: 'Chú ý', value: 'Khi $x$ thuộc $A$, ta còn nói "$x$ nằm trong $A$", hay "$A$ chứa $x$".' },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ', value: 'Với tập hợp $M$ trên Hình 1.3, ta có $4 \\in M$, $1 \\in M$, $7 \\notin M$.' },
          { type: ContentPartType.EXERCISE, label: 'Luyện tập 1', value: 'Gọi $B$ là tập hợp các bạn tổ trưởng trong lớp em. Em hãy chỉ ra một bạn thuộc tập $B$ và một bạn không thuộc tập $B$.' },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. MÔ TẢ MỘT TẬP HỢP' },
          { type: ContentPartType.TEXT, value: `Mô tả một tập hợp là cho biết cách xác định các phần tử của tập hợp đó. Ta thường dùng hai cách mô tả tập hợp sau:

**Cách 1: Liệt kê các phần tử của tập hợp, tức là viết các phần tử của tập hợp trong dấu ngoặc { } (theo thứ tự tùy ý nhưng mỗi phần tử chỉ được viết một lần).**` },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ', value: 'Với tập $P$ gồm các số $0; 1; 2; 3; 4; 5$ ở Hình 1.4, ta viết:\n$P = \\{0; 1; 2; 3; 4; 5\\}$.' },
          { type: ContentPartType.TEXT, value: `**Cách 2: Nêu dấu hiệu đặc trưng cho các phần tử của tập hợp**` },
          { type: ContentPartType.EXAMPLE, label: 'Ví dụ', value: 'Với tập $P$ (xem H.1.4) ta có thể viết:\n$P = \\{n \\mid n$ là số tự nhiên nhỏ hơn $6\\}$.' },
          { type: ContentPartType.NOTE, label: 'Chú ý', value: `
*   Gọi $N$ là tập hợp gồm các số tự nhiên $0; 1; 2; 3; ...$. Ta có thể viết tập $N = \\{0; 1; 2; 3; ...\\}$.
*   Ta viết $n \\in N$ có nghĩa $n$ là một số tự nhiên. Chẳng hạn, tập $P$ các số tự nhiên nhỏ hơn $6$ có thể viết là:\n$P = \\{n \\in N \\mid n < 6\\}$ hoặc $P = \\{n \\in N \\mid n \\le 5\\}$.
*   Ta còn dùng kí hiệu $N^*$ để chỉ tập hợp các số tự nhiên khác $0$, nghĩa là $N^* = \\{1; 2; 3; ...\\}$.` },
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
Tập $Y = \\{1; 2; 3; ...; 50\\}$ có $50$ phần tử.
$X$ và $Y$ là những tập hợp có một số hữu hạn phần tử. Ta gọi chúng là những tập hữu hạn.
Khác với tập $X, Y$, tập hợp có vô số phần tử là tập vô hạn. Tập $N$ là tập vô hạn.

**Giao của hai tập hợp**
Gọi $C$ là tập hợp gồm các phần tử chung của hai tập $A$ và $B$.
Ta gọi tập $C$ là giao của hai tập $A$ và $B$, kí hiệu $C = A \\cap B$.` },
          // Added 'value' property for image captions
          { type: ContentPartType.IMAGE, value: 'Minh họa Tập hợp, Hình 1.3', imageUrl: 'https://picsum.photos/300/200?random=1', alt: 'Minh họa Tập hợp, Hình 1.3' },
          { type: ContentPartType.IMAGE, value: 'Minh họa Tập hợp, Hình 1.4', imageUrl: 'https://picsum.photos/300/200?random=2', alt: 'Minh họa Tập hợp, Hình 1.4' },
          { type: ContentPartType.IMAGE, value: 'Minh họa Georg Cantor', imageUrl: 'https://picsum.photos/300/200?random=3', alt: 'Minh họa Georg Cantor' },
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

*   **Để biểu diễn các số từ 11 đến 20**, ta thêm X vào bên trái mỗi số từ 1 đến 9: XI, XII, ..., XX.

*   **Để biểu diễn các số từ 21 đến 30**, ta thêm XX vào bên trái mỗi số từ 1 đến 9: XXI, XXII, ..., XXX.` },
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
          // Added 'value' property for image captions
          { type: ContentPartType.IMAGE, value: 'Minh họa bảng chữ số La Mã', imageUrl: 'https://picsum.photos/400/200?random=4', alt: 'Minh họa bảng chữ số La Mã' },
          { type: ContentPartType.IMAGE, value: 'Minh họa đồng tiền Việt Nam', imageUrl: 'https://picsum.photos/400/200?random=5', alt: 'Minh họa đồng tiền Việt Nam' },
          { type: ContentPartType.IMAGE, value: 'Minh họa hệ nhị phân', imageUrl: 'https://picsum.photos/400/200?random=6', alt: 'Minh họa hệ nhị phân' },
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
          // Added 'value' property for image captions
          { type: ContentPartType.IMAGE, value: 'Minh họa tia số', imageUrl: 'https://picsum.photos/400/200?random=7', alt: 'Minh họa tia số' },
          { type: ContentPartType.IMAGE, value: 'Minh họa so sánh số', imageUrl: 'https://picsum.photos/400/200?random=8', alt: 'Minh họa so sánh số' },
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
          // Added 'value' property for image captions
          { type: ContentPartType.IMAGE, value: 'Minh họa ước và bội', imageUrl: 'https://picsum.photos/400/200?random=9', alt: 'Minh họa ước và bội' },
          { type: ContentPartType.IMAGE, value: 'Minh họa số chia hết', imageUrl: 'https://picsum.photos/400/200?random=10', alt: 'Minh họa số chia hết' },
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
*   Xét số $n = \\overline{23*}$ ($*$ là chữ số tận cùng của $n$). Ta viết $n = 230 + *$.
    **HD1** Số $230$ có chia hết cho $2$ và chia hết cho $5$ không?
*   **HD2** Vận dụng tính chất chia hết của một tổng, hãy cho biết:
    a) Thay dấu $*$ bởi chữ số nào thì $n$ chia hết cho $2$?
    b) Thay dấu $*$ bởi chữ số nào thì $n$ chia hết cho $5$?

*   Các số có chữ số tận cùng là $0, 2, 4, 6, 8$ thì **chia hết cho 2** và chỉ những số đó mới chia hết cho 2.
*   Các số có chữ số tận cùng là $0$ hoặc $5$ thì **chia hết cho 5** và chỉ những số đó mới chia hết cho 5.` },
          { type: ContentPartType.HEADING_PRIMARY, value: '2. DẤU HIỆU CHIA HẾT CHO 9, CHO 3' },
          { type: ContentPartType.TEXT, value: `Hà nhận thấy số 180 chia hết cho 9 và tổng các chữ số của nó là $1 + 8 + 0 = 9$ cũng chia hết cho 9. Liệu những số chia hết cho 9 đều có tính chất này không?` },
          { type: ContentPartType.EXAMPLE, label: 'Dấu hiệu chia hết cho 9', value: `
Cho các số $27; 82; 195; 234$.
*   **HD3** Hãy sắp xếp các số trên thành hai nhóm: Nhóm các số chia hết cho $9$ và nhóm các số không chia hết cho $9$.
*   **HD4** Tính tổng các chữ số của mỗi số và xét tính chia hết cho $9$ của các tổng đó trong mỗi nhóm.

Các số có tổng các chữ số chia hết cho $9$ thì **chia hết cho 9** và chỉ những số đó mới chia hết cho 9.` },
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
          // Added 'value' property for image captions
          { type: ContentPartType.IMAGE, value: 'Minh họa dấu hiệu chia hết', imageUrl: 'https://picsum.photos/400/200?random=11', alt: 'Minh họa dấu hiệu chia hết' },
          { type: ContentPartType.IMAGE, value: 'Minh họa số chia hết', imageUrl: 'https://picsum.photos/400/200?random=12', alt: 'Minh họa số chia hết' },
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
          // Added 'value' property for image captions
          { type: ContentPartType.IMAGE, value: 'Minh họa phân tích thừa số nguyên tố', imageUrl: 'https://picsum.photos/400/200?random=13', alt: 'Minh họa phân tích thừa số nguyên tố' },
          { type: ContentPartType.IMAGE, value: 'Minh họa sơ đồ cây', imageUrl: 'https://picsum.photos/400/200?random=14', alt: 'Minh họa sơ đồ cây' },
          { type: ContentPartType.IMAGE, value: 'Minh họa cột dọc', imageUrl: 'https://picsum.photos/400/200?random=15', alt: 'Minh họa cột dọc' },
          { type: ContentPartType.IMAGE, value: 'Minh họa Sàng Eratosthenes', imageUrl: 'https://picsum.photos/400/200?random=16', alt: 'Minh họa Sàng Eratosthenes' },
        ],
      },
    ],
  },
];
