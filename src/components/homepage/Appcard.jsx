import Image from "next/image";
import Link from "next/link";

const Appcard = ({ app }) => {
  return (
    <div className="h-full rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      {/* Top */}
      <div className="flex items-center gap-3">

        {/* Image */}
        <Image
          src={app.image}
          alt={app.title}
          width={80}
          height={80}
          className="h-20 w-20 shrink-0 rounded-xl object-cover"
        />

        {/* Info */}
        <div className="min-w-0 flex-1">

          <h2 className="truncate text-base font-bold">
            {app.title}
          </h2>

          <p className="mt-1 truncate text-sm text-base-content/60">
            {app.companyName}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-2">

            <span className="rounded-full bg-warning/10 px-2 py-1 text-xs font-semibold text-warning">
              ⭐ {app.ratingAvg}
            </span>

            <span className="text-xs text-base-content/50">
              {app.reviews} reviews
            </span>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-4 flex items-center justify-between border-t border-base-300 pt-4">

        <div>
          <p className="text-xs text-base-content/50">
            Downloads
          </p>

          <p className="text-sm font-bold">
            {app.downloads}
          </p>
        </div>

        <Link
          href={`/apps/${app.id}`}
          className="btn btn-primary btn-sm rounded-full px-5"
        >
          Details
        </Link>

      </div>

    </div>
  );
};

export default Appcard;