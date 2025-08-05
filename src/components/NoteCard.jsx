import { PenSquareIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
function NoteCard({ note }) {
  return (
    <Link
      to={`/note/${note._id}`}
      className="card transition ease-in-out hover:-translate-y-1 hover:scale-105 bg-base-100 border-solid border-t-4 border-[#00ff9D]"
    >
      <div className="card-body">
        <h2 className="card-title text-base-content ">{note.title}</h2>
        <p className="text-base-content/70 line-clamp-3">{note.description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />

            <button className="btn btn-ghost btn-xs text-error">
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NoteCard;
