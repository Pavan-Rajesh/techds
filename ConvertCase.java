import java.util.Scanner;

public class ConvertCase {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter text: ");
        String paragraph = scanner.nextLine();
        scanner.close();

        StringBuilder convertedParagraph = new StringBuilder();

        for (char c : paragraph.toCharArray()) {
            if (Character.isLowerCase(c)) {
                convertedParagraph.append(Character.toUpperCase(c));
            } else if (Character.isUpperCase(c)) {
                convertedParagraph.append(Character.toLowerCase(c));
            } else {
                convertedParagraph.append(c);
            }
        }

        System.out.println(convertedParagraph.toString());
    }
}