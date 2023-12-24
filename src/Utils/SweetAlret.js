import swal from "sweetalert";

export const Confirm = (itemId) => {
  return swal({
    title: "! حذف رکورد",
    text: `آیا از حذف رکورد ${itemId} اطمینان دارید؟`,
    icon: "warning",
    buttons: ["خیر", "بله"],
    dangerMode: true,
  });
};
export const Alert = () => {
  return swal("شما از حذف رکورد منصرف شدید", {
    buttons: "متوجه شدم",
    icon: "warning",
  });
};
