import { createCategoryPage } from "@/app/actions";
import { CreationBottomBar } from "@/app/components/CreationButtomBar";
import { SelectedCategory } from "@/app/components/SelectedCategory";

export default function StructureRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describes your home?
        </h2>
      </div>

      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id} />
        <SelectedCategory />
        <CreationBottomBar />
      </form>
    </>
  );
}
