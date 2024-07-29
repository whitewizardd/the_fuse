
public class SortedArray {
    
    public static double medianOfAnArray(int[] arr1, int[] arr2) {
        int lengthOfTheFirstArray = arr1.length;
        int lengthOfTheSecondArray = arr2.length;
        
        int low = 0;
        int high = lengthOfTheFirstArray;
        
        while (low <= high) {
            int partitionX = (low + high) / 2;
            int partitionY = ((lengthOfTheFirstArray + lengthOfTheSecondArray + 1) / 2) - partitionX;
            
            int maxOfLeftX = (partitionX == 0) ? Integer.MIN_VALUE : arr1[partitionX - 1];
            int minOfRightX = (partitionX == lengthOfTheFirstArray) ? Integer.MAX_VALUE : arr1[partitionX];
            
            int maxOfLeftY = (partitionY == 0) ? Integer.MIN_VALUE : arr2[partitionY - 1];
            int minOfRightY = (partitionY == lengthOfTheSecondArray) ? Integer.MAX_VALUE : arr2[partitionY];
            
            if (maxOfLeftX <= minOfRightY && maxOfLeftY <= minOfRightX) {
                if ((lengthOfTheFirstArray + lengthOfTheSecondArray) % 2 == 0) {
                    return ((double)Math.max(maxOfLeftX, maxOfLeftY) + Math.min(minOfRightX, minOfRightY)) / 2;
                } else {
                    return (double)Math.max(maxOfLeftX, maxOfLeftY);
                }
            } else if (maxOfLeftX > minOfRightY) {
                high = partitionX - 1;
            } else {
                low = partitionX + 1;
            }
        }
        throw new IllegalArgumentException();
    }
}