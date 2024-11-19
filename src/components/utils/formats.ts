export const formatAddress = (address: string): string => {
   /**
    * Formats the string to have the first 4 characters, '...', and the last 4 characters.
    *
    * @param address - The original string to format.
    * @returns The formatted string.
    */
   return `${address.slice(0, 4)}...${address.slice(-4)}`;
};
