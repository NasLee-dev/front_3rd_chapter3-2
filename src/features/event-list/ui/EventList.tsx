import { Text } from '@chakra-ui/react';
import { useState } from 'react';

import { Event } from '../../../entities/event/model/types';
import { EventCard } from '../../../entities/event/ui/EventCard';
import { FormControl, FormLabel } from '../../../shared/ui/FormControl';
import Input from '../../../shared/ui/Input';
import { VStack } from '../../../shared/ui/Stack';
import { useEventList } from '../hooks/useEventList';

interface EventListProps {
  notifiedEvents: string[]; // 알림 상태를 props로 받음
}

export const EventList = ({ notifiedEvents }: EventListProps) => {
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const { searchTerm, filteredEvents, handleSearch, handleEdit, handleDelete } = useEventList({
    editingEvent,
    setEditingEvent,
  });

  return (
    <VStack data-testid="event-list" w="500px" h="full" overflowY="auto">
      <FormControl>
        <FormLabel>일정 검색</FormLabel>
        <Input placeholder="검색어를 입력하세요" value={searchTerm} onChange={handleSearch} />
      </FormControl>

      {filteredEvents.length === 0 ? (
        <Text>검색 결과가 없습니다.</Text>
      ) : (
        filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            isNotified={notifiedEvents.includes(event.id)}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      )}
    </VStack>
  );
};
