import { NextRequest, NextResponse } from "next/server";
import { getProjects, saveProjects } from "@/lib/admin/storage";
import { ProjectData } from "@/lib/admin/types";
import { isUserAdminAuthenticated } from "@/lib/admin/auth";

export async function GET() {
  const projects = getProjects();
  return NextResponse.json({ projects });
}

export async function POST(request: NextRequest) {
  const isAuth = await isUserAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const project: ProjectData = await request.json();
    if (!project.title || !project.category) {
      return NextResponse.json({ error: "Title and category are required" }, { status: 400 });
    }

    const projects = getProjects();
    const newProject: ProjectData = {
      ...project,
      id: project.id || project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      slug: project.slug || project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      year: project.year || String(new Date().getFullYear()),
      metrics: project.metrics || [],
      stack: project.stack || [],
      image: project.image || "/images/project-maddy-voice.jpg",
      imageAlt: project.imageAlt || project.title,
      aspect: project.aspect || "16:10",
      featured: project.featured ?? false,
    };

    projects.unshift(newProject);
    saveProjects(projects);

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const isAuth = await isUserAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const project: ProjectData = await request.json();
    if (!project.id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    const projects = getProjects();
    const index = projects.findIndex((p) => p.id === project.id);
    if (index === -1) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    projects[index] = { ...projects[index], ...project };
    saveProjects(projects);

    return NextResponse.json({ success: true, project: projects[index] });
  } catch {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const isAuth = await isUserAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Project ID required" }, { status: 400 });
  }

  const projects = getProjects();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  saveProjects(filtered);
  return NextResponse.json({ success: true, message: "Project deleted" });
}
