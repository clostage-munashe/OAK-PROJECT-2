export type Partner ={
    initials:string;
    name:string;
    region:string;
    type:string;
    tags:string[];
    year:number;
    website:string;
};

type PartnerCardProps = {
    partner: Partner;
};

export default function PartnerCard({ partner }: PartnerCardProps) {
    return (
        <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5">
           
        <div className="flex iteme-start ga-4">   

            /*logo /initials*/

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-xs font-bold text-white">
                {partner.initials}
            </div>

            <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                    {partner.name}
                </div>
            </div> 

        </div>
        </article>
    );
}
