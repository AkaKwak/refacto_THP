import React from 'react';
import { List, Card, Col, Icon } from 'antd/es';

const PublicationsList = ({ posts, onOpenPreview }) => {
  return (
    <Col span={24} className="container text-center">
      <h2>
        <Icon type="save" />
        <span className="span-icon">Publications</span>
      </h2>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={posts}
        renderItem={(post, index) => (
          <List.Item>
            <Card bordered className="card-pubs" onClick={() => onOpenPreview(index)}>
              <img src={post.imageUrl} width={200} height={200} alt={post.description} />
            </Card>
          </List.Item>
        )}
      />
    </Col>
  );
};

export default PublicationsList;
