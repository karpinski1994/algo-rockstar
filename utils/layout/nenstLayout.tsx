import { ReactNode } from "react";

const nestLayout = (parent: any, child: any) => (page: ReactNode) => parent(child(page));

export default nestLayout;