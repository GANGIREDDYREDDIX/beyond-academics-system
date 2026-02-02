import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Keyboard } from "lucide-react";

interface KeyboardShortcutsHelpProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const KeyboardShortcutsHelp = ({ open, onOpenChange }: KeyboardShortcutsHelpProps) => {
  const shortcuts = [
    {
      category: "Navigation",
      items: [
        { keys: ["Ctrl", "K"], description: "Open command palette" },
        { keys: ["Ctrl", "S"], description: "Focus search field" },
        { keys: ["Esc"], description: "Close dialogs" },
        { keys: ["Tab"], description: "Navigate forward" },
        { keys: ["Shift", "Tab"], description: "Navigate backward" },
      ],
    },
    {
      category: "Admin Panel",
      items: [
        { keys: ["Ctrl", "1"], description: "Go to pending tab" },
        { keys: ["Ctrl", "2"], description: "Go to approved tab" },
        { keys: ["Ctrl", "3"], description: "Go to rejected tab" },
        { keys: ["Ctrl", "E"], description: "Export to CSV" },
      ],
    },
    {
      category: "Help",
      items: [
        { keys: ["?"], description: "Show this help dialog" },
      ],
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Keyboard className="w-5 h-5" aria-hidden="true" />
            Keyboard Shortcuts
          </DialogTitle>
          <DialogDescription>
            Use these keyboard shortcuts to navigate faster
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {shortcuts.map((section) => (
            <div key={section.category}>
              <h3 className="font-semibold text-sm mb-3">{section.category}</h3>
              <div className="space-y-2">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50"
                  >
                    <span className="text-sm text-muted-foreground">
                      {item.description}
                    </span>
                    <div className="flex gap-1">
                      {item.keys.map((key, keyIndex) => (
                        <Badge
                          key={keyIndex}
                          variant="secondary"
                          className="font-mono text-xs px-2 py-1"
                        >
                          {key}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground">
            <strong>Tip:</strong> Press <Badge variant="secondary" className="font-mono text-xs mx-1">?</Badge> anytime to view this help dialog.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KeyboardShortcutsHelp;
