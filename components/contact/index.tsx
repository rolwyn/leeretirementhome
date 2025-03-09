import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface Contact {
  type: string
}

const Contact = ({ type }: Contact) => {
  return <Dialog>
    <DialogTrigger asChild>
      <Button className="cursor-pointer">
        {type === 'Menu' ? (
          <><Mail /> Contact</>
        ): <span>Contact Us</span>}
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogDescription>
          Leave a message and we will get back to you soon.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button type="submit">Submit</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>;
}
 
export default Contact;