json.extract! video, :id, :title, :view_count, :uploader_id, :created_at
json.thumbnailUrl url_for(video.thumbnail_file)