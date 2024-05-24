import { toast } from "sonner";

// Copy text to clipboard
export const handleCopy = async (title, text) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(`${title} copied to the clipboard`);
  } catch (error) {
    //console.log(error);
  }
};
