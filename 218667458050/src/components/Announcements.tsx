import { announcements } from '@/data/announcements';

export function Announcements() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-[#0A2463] mb-8">
          最新公告
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {announcements.map(announcement => (
              <div key={announcement.id} className="border-l-4 border-[#357ABD] pl-4 py-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-serif font-semibold text-[#0A2463]">
                    {announcement.title}
                  </h3>
                  <span className="text-sm font-sans text-gray-500">
                    {announcement.date}
                  </span>
                </div>
                <p className="mt-2 text-sm font-sans text-gray-600">
                  {announcement.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}