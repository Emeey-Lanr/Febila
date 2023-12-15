import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import children from "@/public/images/children.jpg"
import estate from "@/public/images/estate3.jpg"
import fashion from "@/public/images/fasion.jpg"
interface HERODATA {
    currentIndex: number;
    data: { heading: string, paragraph: string, img: any }[]

}
const heroData: HERODATA = {
  currentIndex: 0,
  data: [
    {
      heading: `  UNLOCKING INIFINITE <br /> POSIBILITIES FOR{" "}
                <span className="text-blue-600 font-bold text-5xl">YOU</span>`,
      paragraph: `FEBILA a
                gateway to endless opportunities and transformative experiences,
                where every click brings you closer to the extraordinary, where
                your aspirations become reality`,
      img: children,
    },
    {
      heading: `  UNLOCKING INIFINITE <br /> POSIBILITIES FOR{" "}
                <span className="text-blue-600 font-bold text-5xl">YOU</span>`,
      paragraph: `FEBIL, we act as the mouth piece for speechless and render hope for those that are who are hopeless by
                 providing for those who are in neeed of it`,
      img: estate,
    },
    {
      heading: `  UNLOCKING INIFINITE <br /> POSIBILITIES FOR{" "}
                <span className="text-blue-600 font-bold text-5xl">YOU</span>`,
      paragraph: `FEBILA a
                gateway to endless opportunities and transformative experiences,
                where every click brings you closer to the extraordinary, where
                your aspirations become reality`,
      img: fashion,
    },
  ],
};

export const heroSlice = createSlice({
    name: "hero slice",
    initialState: { value: heroData },
    reducers: {
      changeInfo: (state, action:PayloadAction<string>) => {
        }
    }
})

export const {changeInfo } = heroSlice.actions
export default heroSlice.reducer