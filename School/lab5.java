package School;

import java.util.Scanner;

public class lab5 {

    public static void main(String[] args) {

            Scanner input = new Scanner(System.in);

            // lettera(input);
            // removespaces(input);
            duplicates(input);
        }
    
    public static void lettera(Scanner input) {
    
            int count = 0;
            System.out.print("Please enter your characters: ");
    
            String lettera = input.next();
            char[] letter = lettera.toCharArray();
    
            for (int i = 0; i < letter.length; i++) {
    
                if (lettera.charAt(i) == 'a') {
                    count++;
                }
    
            }
            System.out.println("You have " + count + " A's.");
    
        }
    
     public static void removespaces(Scanner input) {
    
            String without = "";
    
            System.out.print("Please enter your characters: ");
    
            String lettera = input.nextLine();
            lettera.toCharArray();
    
            for (int i = 0; i < lettera.length(); i++) {	
    
                if (lettera.charAt(i) != ' ') {
                    without = without + lettera.charAt(i);
                }
                
                
            }
            System.out.println(without);
        }
    
    public static void duplicates(Scanner input) {
            
            String doupes = "";
            
            
    
            System.out.print("Please enter your array:  ");
    
            String lettera = input.next();
            lettera.toCharArray();
            
            
            
            for (int i = 0; i < lettera.length(); i++) {
                
                for (int j = (i + 1); j < lettera.length() ; j++) {
                    
                    
                    if (lettera.charAt(i) == lettera.charAt(j)){
                        
                        
                        doupes += lettera.charAt(i);
                        
                    }
                }
            }System.out.print(doupes);
            
        }	
    public static void word() {
            
            
            
            
            
            //System.out.println(words[2] + + words[1] + + words[0]);
            
        }
    }

  	
            
        
    
            
        


    
