import java.util.Scanner;

public class Frequency {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter text: ");
        String paragraph = scanner.nextLine();
        scanner.close();

        int count = 0;
        for (char c : paragraph.toCharArray()) {
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O'
                    || c == 'U') {
                count = count + 1;
            }
        }
        System.out.println(count);

    }
}