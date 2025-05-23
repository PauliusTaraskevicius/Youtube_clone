import { ResponsiveModal } from "@/components/reponsive-modal";
import { trpc } from "@/trpc/client";
import { UploadDropzone } from "@/utils/uploadthing";

interface BannerUploadModalProps {
  userId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BannerUploadModal = ({
  onOpenChange,
  open,
  userId,
}: BannerUploadModalProps) => {
  const utils = trpc.useUtils();

  const onUploadComplete = () => {
    utils.users.getOne.invalidate({ id: userId });
    onOpenChange(false);
  };

  return (
    <ResponsiveModal
      title="Upload a banner"
      open={open}
      onOpenChange={onOpenChange}
    >
      <UploadDropzone
        endpoint="bannerUploader"
        onClientUploadComplete={onUploadComplete}
      />
    </ResponsiveModal>
  );
};
